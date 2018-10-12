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
        this.clickDot();
    }

    clickDot(): void {
        this.currentCarousel.addEventListener('sc-slide-changed', (event: any) => {
            console.log(event.detail, 4);
        });
    }


    getNumCurrentSlide(lengthSlidesList: number, activeDot: number): number {
        return lengthSlidesList - activeDot;
    }

    hideCurrentSlide(numCurrentSlide: number, slides: NodeListOf<Element>, dots: NodeListOf<Element>, activeDot: number): void {
        slides[numCurrentSlide].classList.remove('show-slide');
        dots[activeDot - 1].classList.remove('active');
    }

    getNewCurrentSlide(numCurrentSlide: number, lengthSlidesList: number, activeDot: number): number {
        const nextSlide: number = lengthSlidesList - activeDot;
        return (nextSlide + lengthSlidesList) % lengthSlidesList;
    }

    showNewCurrentSlide(currentSlide: number, slides: NodeListOf<Element>, dots: NodeListOf<Element>, lengthSlidesList: number): void {
        slides[currentSlide].classList.add('show-slide');
        dots[lengthSlidesList - currentSlide - 1].classList.add('active');
    }

    goToDots(): void {
        const dots: HTMLDivElement = document.querySelector('[data-dots-container]'); // '[data-slide-container]'
        dots.addEventListener('click', (event: any) => {
            // console.log(event.target.title);
            const slider: HTMLDivElement = event.target.closest('[data-slide-container]'); // '[data-slide-container]'
            const slides: NodeListOf<Element> = slider.querySelectorAll('[data-slide-item]'); // '[data-slide-item]'
            const dotsArray: NodeListOf<Element> = slider.querySelectorAll('.dot');
            const activeDot: HTMLDivElement = dots.querySelector('.active');
            const numCurrentSlide: number = this.getNumCurrentSlide(slides.length, +activeDot.title);
            this.hideCurrentSlide(numCurrentSlide, slides, dotsArray, +activeDot.title);
            this.showNewCurrentSlide(this.getNewCurrentSlide(numCurrentSlide, slides.length, event.target.title), slides, dotsArray, slides.length);
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
