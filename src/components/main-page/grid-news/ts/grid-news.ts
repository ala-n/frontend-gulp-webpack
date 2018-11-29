import Grid from '../../../core/grid/ts/grid';

class GridNews extends Grid {
	constructor() {
		super();
	}

	// _onUpdate = () => this.rerender();

	connectedCallback() {
		this.addEventListener('click', this._onClick);
	}

	// private rerender() {
	// }
}

customElements.define('grid-news', GridNews);
