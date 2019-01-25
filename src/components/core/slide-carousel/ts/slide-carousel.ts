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
		index = (index + this.count) % this.count;
		const activeIndex = this.activeIndex;
		if (index === activeIndex) {
			return;
		}

		const activeSlide = this.slides[activeIndex];
		const siblingSlide = this.slides[index];

		const direction = this.getDirection(activeIndex, index);

		siblingSlide.classList.add('sibling');
		this.classList.add(`move-${direction}`);

		siblingSlide.addEventListener('animationend', () => {
			activeSlide.classList.remove('active-slide');
			siblingSlide.classList.add('active-slide');
			siblingSlide.classList.remove('sibling');
			this.classList.remove(`move-${direction}`);
			this.triggerSlideChange();
		}, {once: true});
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

	private getDirection(i: number, j: number): string {
		const dif = i - j;
		return (dif < 0) ?
			(Math.abs(dif) > Math.abs(dif + this.count) ? 'left' : 'right') :
			(Math.abs(dif) > Math.abs(dif - this.count) ? 'right' : 'left');
	}

	private setActive(target: string | number) {
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

	private triggerSlideChange() {
		const event = new CustomEvent('sc-slide-changed', {
			bubbles: true
		});
		this.dispatchEvent(event);
	}
}

customElements.define('slide-carousel', SlideCarousel);
export default SlideCarousel;
