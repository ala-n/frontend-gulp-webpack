import Grid from '../../../core/grid/ts/grid';

class GridNews extends Grid {
	constructor() {
		super();
	}

	get countNewsOnPage(): number {
		// + count news carousel?
		return document.querySelectorAll('.container-news').length;
	}
	// _onUpdate = () => this.rerender();

	connectedCallback() {
		this.buttonLoad.addEventListener('click', this._onClick);
		console.log(this.countNewsOnPage);
	}

	// private rerender() {
	// }
}

customElements.define('grid-news', GridNews);
