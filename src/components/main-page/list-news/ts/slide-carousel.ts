class Carousel extends HTMLElement {

	constructor() {
		super();
	}

	get slides(): HTMLElement[] {
		const els = this.querySelectorAll('[data-slide-item]') as NodeListOf<HTMLElement>;
		return els ? Array.from(els) : [];
	}

	get count(): number {
		return this.slides.length;
	}

	// TODO: rewrite to determine current slide from carousel only (not dots or smth else)
	private get activeIndex(): number {
		const activeSlide: HTMLDivElement = this.querySelector('.active-slide');
		return this.count - (+activeSlide.title);
	}

	connectedCallback() {
		this.goToSlide();
		this.bindEvents();
	}

	onClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const numCurrentSlide: number = this.activeIndex;
		this.hideCurrentSlide(numCurrentSlide);
		const newCurrentSlide = this.getNewCurrentSlide(target.getAttribute('data-target'), numCurrentSlide, this.count);
		this.showNewCurrentSlide(newCurrentSlide);
		this.triggerSlideChange(newCurrentSlide); // move to real change slide logic (setter accessor for activeIndex)
		// setActive(/*target from attribute*/)
		event.stopPropagation();
		event.preventDefault();
	}

	bindEvents() {
		// listeners will be here
		this.addEventListener('click', (event) => this.onClick(event));
	}

	// set activeIndex(index: number) {
	// 	// change slide
	// }

	setActive(target: number | 'prev' | 'next') {
		if ('prev' === target) {
			this.activeIndex--;
		} else if ('next' === target) {
			this.activeIndex--;
		} else {
			this.activeIndex = target;
		}
	}

	getNewCurrentSlide(showing: string, numCurrentSlide: number, lengthSlidesList: number): number {
		let nextSlide: number = 0;
		switch (showing) {
			case 'prev':
				nextSlide = numCurrentSlide + 1;
				break;
			case 'next':
				nextSlide = numCurrentSlide - 1;
				break;
		}
		return (nextSlide + lengthSlidesList) % lengthSlidesList;
	}

	showNewCurrentSlide(numCurrentSlide: number): void {
		this.slides[numCurrentSlide].classList.add('show-slide');
	}

	hideCurrentSlide(numCurrentSlide: number): void {
		this.slides[numCurrentSlide].classList.remove('show-slide');
	}

	goToSlide(): void {
		// setActive
	}

	triggerSlideChange(numNewSlide: number) {
		const event = new CustomEvent('sc-slide-changed', {
			bubbles: true,
			detail: {
				numNextSlide: `${numNewSlide}`,
			},
		});
		this.dispatchEvent(event);
	}
}

customElements.define('slide-carousel', Carousel);
