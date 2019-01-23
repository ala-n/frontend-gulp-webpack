class SlideCarousel extends HTMLElement {

	static get is() {
		return 'slide-carousel';
	}

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

	get activeIndex(): number {
		return this.slides.findIndex((el) => el.classList.contains('active-slide'));
	}

	set activeIndex(index: number) {
		// this.slides[this.activeIndex].classList.add('prev-slide');
		this.slides[this.activeIndex].classList.remove('active-slide');
		const newIndex = (index + this.count) % this.count;
		this.slides[newIndex].classList.add('active-slide');
		this.triggerSlideChange();
	}

	addAnimationClasses(target: string) {
		this.slides[this.activeIndex].classList.add(target);
	}

	removeAnimationClasses() {
		this.slides.forEach((slide) => {
			slide.classList.remove('prev');
			slide.classList.remove('next');
			slide.classList.remove('prev-slide');
		})
	}

	_onClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const attrValue = target.getAttribute('data-slide-target');
		if (attrValue) {
			this.setActive(attrValue);
			event.stopPropagation();
			event.preventDefault();
		}
	};

	connectedCallback() {
		this.addEventListener('click', this._onClick);
	}

	disconnectedCallback() {
		this.removeEventListener('click', this._onClick);
	}

	private setActive(target: string | number) {
		this.removeAnimationClasses();
		switch (target) {
			case 'prev':
				this.activeIndex--;
				this.addAnimationClasses('prev');
				break;
			case 'next':
				this.activeIndex++;
				this.addAnimationClasses('next');
				break;
			default:
				this.activeIndex = +target;
		}
	}

	private triggerSlideChange() {
		const event = new CustomEvent('sc-slide-changed', {
			bubbles: true
		});
		this.dispatchEvent(event);
	}
}

customElements.define('slide-carousel', SlideCarousel);
export default SlideCarousel;
