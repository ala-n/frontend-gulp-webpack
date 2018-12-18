class Grid extends HTMLElement {
	maxCountElements: number;

	constructor() {
		super();
		this.maxCountElements = 3;
	}

	get flagLoad(): HTMLElement {
		return document.getElementById('load');
	}

	get countElementsOnPage(): number {
		return this.querySelector('[data-items]').childElementCount;
	}

	buildElements(dataElem: string) {
		const template = document.createElement('template');
		template.innerHTML = dataElem;
		document.querySelector('[data-items]').appendChild(template.content);
		this.loadNews();
	}

	getElements() {
		const url = `/rest/main-page.html?start=${this.countElementsOnPage}&count=${this.maxCountElements + this.countElementsOnPage}`;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			}
		}).then((response) => {
			return response.ok ? response.text() : response.text().then((text) => Promise.reject(text));
		})
			.then((response) => {
				if (response) {
					this.buildElements(response);
				}
			})
			.catch(() => {
				console.log('Error!');
			});
	}
	handleIntersect(entries: any, iObserver: any) {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				const target = entry.target;
				this.getElements();
				iObserver.unobserve(target);
			}
		}
	}
	loadNews() {
		const options = {
			rootMargin: '0px',
			threshold: 1
		};
		const iObserver = new IntersectionObserver(this.handleIntersect.bind(this), options);
		iObserver.observe(this.flagLoad);
	}

	connectedCallback() {
		this.loadNews();
	}
}

customElements.define('grid-element', Grid);

