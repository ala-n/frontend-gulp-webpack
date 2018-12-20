import MatchQuery from '../../match-query/ts/match-query';

class Grid extends HTMLElement {

	static observeOptions = {
		threshold: 1
	};

	maxCountElements: number;
	iObserver: IntersectionObserver;
	urlServer: string;

	constructor() {
		super();
		this.maxCountElements = +this.getAttribute('data-count');
		this.iObserver = new IntersectionObserver(this.handleIntersect.bind(this), Grid.observeOptions);
		this.urlServer = '/rest/main-page.html';
		// this.loadElements = () => {
		// 	setTimeout(() => this.loadElements(), 1000);
		// 	return Promise.resolve();
		// }
	}

	buildMarkerEl() {
		const el = document.createElement('div');
		el.setAttribute('data-loadmarker', '');
		return el;
	}

	get countEls(): number {
		return this.querySelector('[data-items]').childElementCount;
	}

	buildElements(dataElem: string) {
		const template = document.createElement('template');
		template.innerHTML = dataElem;
		document.querySelector('[data-items]').appendChild(template.content);
		this.initMarker();
	}

	get countLoadedEls(): number {
		const matchQuery = new MatchQuery(this.getAttribute('data-count-query'));
		matchQuery.query();
		console.log(matchQuery.value);
		return matchQuery.value;
	}

	loadElements() {
		const url = `${this.urlServer}?start=${this.countEls}&count=${this.countLoadedEls + this.countEls}`;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			}
		}).then((response) => {
			return response.ok ? response.text() : response.text().then((text) => Promise.reject(text));
		}).then((response) => {
			if (response) {
				this.buildElements(response);
			}
		}).catch(() => {
			console.log('Error!');
		});
	}

	handleIntersect(entries: any, iObserver: any) {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				const target = entry.target;
				this.loadElements();
				iObserver.unobserve(target);
			}
		}
	}

	initMarker() {
		let markerEl = this.querySelector('[data-loadmarker]');
		if (!markerEl) {
			markerEl = this.buildMarkerEl();
			this.appendChild(markerEl);
		}
		this.iObserver.observe(markerEl);
	}

	connectedCallback() {
		this.initMarker();
	}
}

customElements.define('grid-element', Grid);

