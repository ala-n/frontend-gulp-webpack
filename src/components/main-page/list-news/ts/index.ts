class Carousel extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.bindEvents();
    }

    // Simple get
    get value() {
        return this.getAttribute('value');
    }
    set value(val) {
        this.setAttribute('value', val);
    }

    bindEvents() {
        this.clickPreviousSlide();
        this.clickNextSlide();
        this. clickDot();
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

    getSlide(event: any, showing: string): void {
        const slider: HTMLDivElement = event.target.closest('.slider');
        const slides: NodeListOf<Element> = slider.querySelectorAll('.information');
        const dots: NodeListOf<Element> = slider.querySelectorAll('.dot');
        const activeDot: HTMLDivElement = slider.querySelector('.active');
        const numCurrentSlide: number = this.getNumCurrentSlide(slides.length, +activeDot.title);
        this.hideCurrentSlide(numCurrentSlide, slides, dots, +activeDot.title);
        this.showNewCurrentSlide( this.getNewCurrentSlide(showing, numCurrentSlide, slides.length, event.target.title), slides, dots, slides.length);
    }


    clickPreviousSlide() {
        const previousArrows = document.querySelectorAll('.previous');
        for (let index = 0; index < previousArrows.length; index++) {
            previousArrows[index].addEventListener('click', (event: any) => {
                this.getSlide(event, 'prev');
            })
        }
    }

    clickNextSlide() {
        const nextArrows = document.querySelectorAll('.next');
        for (let index = 0; index < nextArrows.length; index++) {
            nextArrows[index].addEventListener('click', (event: any) => {
                this.getSlide(event, 'next');
            })
        }
    }

    clickDot() {
        const dotsArray = document.querySelectorAll('.dots-wrapper');
        for (let index = 0; index < dotsArray.length; index++) {
            dotsArray[index].addEventListener('click', (event: any) => {
                this.getSlide(event, 'dot');
            });
        }
    }
}
customElements.define('slide-carousel', Carousel);