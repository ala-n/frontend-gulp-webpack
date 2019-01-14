import MatchQuery from '../../match-query/ts/match-query';
import {delay} from '../../utils/promise-utils';

class Grid extends HTMLElement {

	static observeOptions = {
		threshold: 1
	};

	matchQuery: MatchQuery;
	iObserver: IntersectionObserver;
	gridElsCount: number;
	_loadingPromise: Promise<any>;

	constructor() {
		super();
		this.gridElsCount = +this.dataset.count;
		this.iObserver = new IntersectionObserver(this.onIntersect.bind(this), Grid.observeOptions);
	}

	connectedCallback() {
		this.matchQuery = MatchQuery.parse(this.getAttribute('data-count-query'));
		this.appendMarker();
	}

	get url() {
		return this.dataset.url;
	}

	buildMarkerEl() {
		const el = document.createElement('div');
		el.setAttribute('data-loadmarker', '');
		return el;
	}

	get itemsContainer() {
		return this.querySelector('[data-items-container]');
	}

	get itemsCount() {
		return this.itemsContainer.childElementCount;
	}

	buildItems(itemsHTML: string) {
		if (itemsHTML) {
			const template = document.createElement('template');
			template.innerHTML = itemsHTML;
			return template.content;
		}
		return null;
	}

	get loadedElsCount(): number {
		const count = +this.matchQuery.matchedValue;
		return count - this.itemsCount % count;
	}

	loadMore() {
		const url = `${this.url}/elsCount?start=${this.itemsCount}&count=${this.loadedElsCount + this.itemsCount}`;
		this.setAttribute('loading', '');
		if (this._loadingPromise) {
			return;
		}
		const finallyCb = () => {
			this._loadingPromise = null;
			this.removeAttribute('loading');
		};
		this._loadingPromise = fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			}
		});
		if (this.hasAttribute('debug-delay')) {
			this._loadingPromise = delay(this._loadingPromise, +this.getAttribute('debug-delay'));
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

	onResponse = (responseText: string) => {
		const items = this.buildItems(responseText);
		if (items) {
			this.itemsContainer.appendChild(items);
			this.appendMarker();
		}
	};
	onError = () => {
		console.log('Error!');
	};

	onIntersect(entries: IntersectionObserverEntry[], iObserver: IntersectionObserver) {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				if (this.gridElsCount > this.itemsCount) {
					this.loadMore();
				}
				iObserver.unobserve(entry.target);
			}
		}
	}

	get _marker() {
		return this.querySelector('[data-loadmarker]');
	}

	appendMarker() {
		let marker = this._marker;
		if (!marker) {
			this.appendChild(marker = this.buildMarkerEl());
		}
		this.iObserver.observe(marker);
	}
}

customElements.define('grid-element', Grid);
