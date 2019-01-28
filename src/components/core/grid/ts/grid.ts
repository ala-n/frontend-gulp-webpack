import MatchQuery from '../../match-query/ts/match-query';
import GridService from './grid-service';

class Grid extends HTMLElement {

	static observeOptions = {
		threshold: 1
	};

	matchQuery: MatchQuery;
	iObserver: IntersectionObserver;
	gridElsCount: number;
	url: string;

	constructor() {
		super();
		this.gridElsCount = +this.dataset.count;
		this.url = this.dataset.url;
		this.iObserver = new IntersectionObserver(this.onIntersect.bind(this), Grid.observeOptions);
	}

	connectedCallback() {
		this.matchQuery = MatchQuery.parse(this.getAttribute('data-count-query'));
		this.appendMarker();
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

	onIntersect(entries: IntersectionObserverEntry[], iObserver: IntersectionObserver) {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				if (this.gridElsCount > this.itemsCount) {
					GridService.loadMore();
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
export default Grid;
