class Carousel extends HTMLElement {

    constructor() {

        super();
    }

    connectedCallback() {
        this.bindEvents();
    }

    get dotsArray() {
        return document.querySelectorAll('.dots-wrapper');
    }

    get nextArrows() {
        return document.querySelectorAll('.next');
    }

    get previousArrows() {
        return document.querySelectorAll('.previous');
    }

    bindEvents() {
        this.clickPreviousSlide();
        this.clickNextSlide();
        this.clickDot();
    }

    getNumCurrentSlide(lengthSlidesList: number, activeDot: number): number {
        return lengthSlidesList - activeDot;
    }

    getNewCurrentSlide(showing: string, numCurrentSlide: number, lengthSlidesList: number, activeDot: number): number {
        let nextSlide: number = 0;
        switch (showing) {
            case 'prev':
                nextSlide = numCurrentSlide + 1;
                break;
            case 'next':
                nextSlide = numCurrentSlide - 1;
                break;
            case 'dot':
                nextSlide = lengthSlidesList - activeDot;
                break;
        }
        return (nextSlide + lengthSlidesList) % lengthSlidesList;
    }

    showNewCurrentSlide(currentSlide: number, slides: NodeListOf<Element>, dots: NodeListOf<Element>, lengthSlidesList: number): void {
        slides[currentSlide].classList.add('show-slide');
        dots[lengthSlidesList - currentSlide - 1].classList.add('active');
    }

    hideCurrentSlide(numCurrentSlide: number, slides: NodeListOf<Element>, dots: NodeListOf<Element>, activeDot: number): void {
        slides[numCurrentSlide].classList.remove('show-slide');
        dots[activeDot - 1].classList.remove('active');
    }

    goToSlide(event: any, showing: string): void {
        const slider: HTMLDivElement = event.target.closest('[data-slide-container]'); // '[data-slide-container]'
        const slides: NodeListOf<Element> = slider.querySelectorAll('.information'); // '[data-slide]'
        const dots: NodeListOf<Element> = slider.querySelectorAll('.dot');
        const activeDot: HTMLDivElement = slider.querySelector('.active');
        const numCurrentSlide: number = this.getNumCurrentSlide(slides.length, +activeDot.title);
        this.hideCurrentSlide(numCurrentSlide, slides, dots, +activeDot.title);
        this.showNewCurrentSlide(this.getNewCurrentSlide(showing, numCurrentSlide, slides.length, event.target.title), slides, dots, slides.length);
    }

    clickPreviousSlide() {
        for (const previousArrows of this.previousArrows) {
            previousArrows.addEventListener('click', (event: any) => {
                this.goToSlide(event, 'prev');
                // this.goToSlide( (this.current - 1) % this.count );
            });
        }
    }

    clickNextSlide() {
        for (const nextArrows of this.nextArrows) {
            nextArrows.addEventListener('click', (event: any) => {
                this.goToSlide(event, 'next');
            });
        }
    }

    clickDot() {
        for (const dotsArray of this.dotsArray) {
            dotsArray.addEventListener('click', (event: any) => {
                this.goToSlide(event, 'dot');
            });
        }
    }

    // triggerSlideCHange() {
    //     const event = new Event('sc-slidechanged', {
    //         bubbles: true,
    //     });
    //     this.dispatchEvent(event);
    // }

}

customElements.define('slide-carousel', Carousel);
export default customElements;
