class SlideCarouselDots extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.bindEvents();
    }

    get currentCarousel(): HTMLElement {
        return this.parentElement;
    }

    get slides(): NodeListOf<HTMLDivElement> {
        return this.currentCarousel.querySelectorAll('.carousel-items .carousel-item') as NodeListOf<HTMLDivElement>;
    }

    bindEvents() {
        this.goToDots();
    }

    goToDots(): void {
        const dots: HTMLDivElement = document.querySelector('[data-dots-container]'); // '[data-slide-container]'
        dots.addEventListener('click', (event: any) => {
            // console.log(event.target.title);
            const showing = event.target.title.length ? 'dot' : event.target.closest('.choose').getAttribute('data-target');
            // const slides: NodeListOf<Element> = slider.querySelectorAll('[data-slide-item]'); // '[data-slide-item]'
            // const dots: NodeListOf<Element> = slider.querySelectorAll('.dot');
            // const activeDot: HTMLDivElement = slider.querySelector('.active');
            // const numCurrentSlide: number = this.getNumCurrentSlide(slides.length, +activeDot.title);
            // this.hideCurrentSlide(numCurrentSlide, slides, dots, +activeDot.title);
            // this.showNewCurrentSlide(this.getNewCurrentSlide(showing, numCurrentSlide, slides.length, event.target.title), slides, dots, slides.length);
        });
    }
    // drawDots() {
    //     for (let index = 0; index < this.slides.length; index++) {
    //         const dot = document.createElement('span');
    //         dot.className = index === 0 ? 'carousel-dot active-dot' : 'carousel-dot';
    //         dot.setAttribute('title', `${index + 1}`);
    //         this.appendChild(dot);
    //     }
    // }
}

customElements.define('slide-carousel-dots', SlideCarouselDots);
