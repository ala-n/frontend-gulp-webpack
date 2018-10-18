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
		this.slides[this.activeIndex].classList.remove('active-slide');
		index = (index + this.count) % this.count;
		this.slides[index].classList.add('active-slide');
		this.triggerSlideChange();
	}

	connectedCallback() {
		this.bindEvents();
	}

	bindEvents() {
		this.addEventListener('click', (event) => this._onClick(event));
	}

	_onClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		this.setActive(target.getAttribute('data-slide-target'));
		event.stopPropagation();
		event.preventDefault();
	}

	setActive(target: string | number) {
		switch (target) {
			case 'prev':
				this.activeIndex--;
				break;
			case 'next':
				this.activeIndex++;
				break;
			default:
				this.activeIndex = +target;
		}
	}

	triggerSlideChange() {
		const event = new CustomEvent('sc-slide-changed', {
			bubbles: true
		});
		this.dispatchEvent(event);
	}
}

customElements.define('slide-carousel', SlideCarousel);
export default SlideCarousel;
