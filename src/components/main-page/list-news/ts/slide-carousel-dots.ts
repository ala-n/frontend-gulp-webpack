class SlideCarouselDots extends HTMLElement {
    constructor() {
        super();
    }

    get currentCarousel(): HTMLElement {
        return this.parentElement;
    }

    get getActiveDot(): number {
        const activeDot: HTMLDivElement = this.querySelector('.active');
        return +activeDot.title;
    }

    get getDotsList(): NodeListOf<Element> {
        return this.querySelectorAll('.dot');
    }

    get getLengthDotsList(): number {
        return this.getDotsList.length;
    }

    connectedCallback() {
        this.drawDots();
        this.bindEvents();
    }

    bindEvents() {
        this.onArrowsClick();
        this.goToDots();
    }

    onArrowsClick(): void {
        this.currentCarousel.addEventListener('sc-slide-changed', (event: any) => {
            this.hideCurrentDot();
            this.showNewCurrentDot(event.detail.numNextSlide);
        });
    }

    hideCurrentDot(): void {
        this.getDotsList[this.getActiveDot - 1].classList.remove('active');
    }

    showNewCurrentDot(currentSlide: number): void {
        this.getDotsList[this.getLengthDotsList - currentSlide - 1].classList.add('active');
    }

    getNewCurrentSlide(newActiveDot: number): number {
        const nextSlide: number = this.getLengthDotsList - newActiveDot;
        return (nextSlide + this.getLengthDotsList) % this.getLengthDotsList;
    }

    goToDots(): void {
        this.addEventListener('click', (event: any) => {
            const slidesList = this.currentCarousel.querySelectorAll('[data-slide-item]');
            slidesList[this.getNewCurrentSlide(event.target.title)].classList.remove('show-slide');
            this.hideCurrentDot();
            this.showNewCurrentDot(this.getNewCurrentSlide(event.target.title));
            slidesList[this.getNewCurrentSlide(event.target.title)].classList.add('show-slide');
        });
    }

    drawDots() {
        const lengthSlidesList = this.currentCarousel.querySelectorAll('[data-slide-item]').length;
        for (let index = 0; index < lengthSlidesList; index++) {
            const dot = document.createElement('span');
            dot.className = index ? 'dot' : 'dot active';
            dot.setAttribute('title', `${index + 1}`);
            this.appendChild(dot);
        }
    }
}
customElements.define('slide-carousel-dots', SlideCarouselDots);
