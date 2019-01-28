import {delay} from '../../utils/promise-utils';
import Grid from './grid';

let instance: GridService;

class GridService {

	static loadMore() {
		const inst = new GridService();
		inst.loadMore();
	}

	_loadingPromise: Promise<any>;
	private _grid: Grid;

	constructor() {
		if (instance) {
			return instance;
		}
		instance = this;
		this._grid = document.getElementById('grid') as Grid;
	}

	get loadedElsCount(): number {
		const count = +this._grid.matchQuery.matchedValue;
		return count - this._grid.itemsCount % count;
	}

	buildRequestUrl() {
		return `${this._grid.url}/elsCount?start=${this._grid.itemsCount}&count=${this.loadedElsCount + this._grid.itemsCount}`;
	}

	onResponse = (responseText: string) => {
		const items = this._grid.buildItems(responseText);
		if (items) {
			this._grid.itemsContainer.appendChild(items);
			this._grid.appendMarker();
		}
	};
	onError = () => {
		console.log('Error!');
	};

	private loadMore() {
		this._grid.setAttribute('loading', '');
		if (this._loadingPromise) {
			return;
		}
		const finallyCb = () => {
			this._loadingPromise = null;
			this._grid.removeAttribute('loading');
		};
		this._loadingPromise = fetch(this.buildRequestUrl(), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			}
		});
		if (this._grid.hasAttribute('debug-delay')) {
			this._loadingPromise = delay(this._loadingPromise, +this._grid.getAttribute('debug-delay'));
		}
		this._loadingPromise.then((response: Response) => {
			return response.ok ? response.text() : response.text().then((text) => Promise.reject(text));
		}).then((r) => {
			this.onResponse(r);
			finallyCb();
		}).catch(() => {
			this.onError();
			finallyCb();
		})
	}
}

export default GridService;
