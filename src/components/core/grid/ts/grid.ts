class Grid extends HTMLElement {
	maxCountElements: number;

	constructor() {
		super();
		this.maxCountElements = 3;
	}

	get flagLoad(): HTMLElement {
		// const id = this.getAttribute('target');
		return document.getElementById('load');
	}

	get countElementsOnPage(): number {
		const itemSelector = 'article'; // TODO: move to params
		return this.querySelectorAll(`[data-items] > ${itemSelector}`).length;
	}

	buildElements(dataElem: string) {
		const template = document.createElement('template');
		template.innerHTML = dataElem;
		console.log(template.content);
		document.querySelector('.articles').appendChild(template.content);
		// this.loadNews();
	}


	getElements() {
		const url = `/rest/main-page.html?start=${this.countElementsOnPage - 2}&count=${this.maxCountElements + this.countElementsOnPage - 2}`;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			}
		})
			.then((response) => {
				return response.ok ? response.text() : response.text().then((text) => Promise.reject(text));
			})
			.then((response) => {
				this.buildElements(response);
			})
			.catch(() => {
				console.log('Error!');
			});
	}

	// _onClick = (event: MouseEvent) => {
	// 	this.getElements();
	// 	event.stopPropagation();
	// };

	loadNews() {
		const iObserver = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const target = entry.target;
					this.getElements();
					console.log(target, entry, 'jrghu');
					iObserver.unobserve(target);
				}
			}
		});
		iObserver.observe(this.flagLoad);
	}

	connectedCallback() {
		this.loadNews();
	}
}

customElements.define('grid-element', Grid);

