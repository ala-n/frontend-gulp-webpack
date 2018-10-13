class Carousel extends HTMLElement {

    constructor() {
        super();
    }

    get getSlidesList(): NodeListOf<Element> {
        return this.querySelectorAll('[data-slide-item]');
    }

    get getLengthSlidesList(): number {
        return this.getSlidesList.length;
    }

    get getNumCurrentSlide(): number {
        const activeDot: HTMLDivElement = this.querySelector('.active');
        return this.getLengthSlidesList - (+activeDot.title);
    }

    connectedCallback() {
        this.bindEvents();
    }

    bindEvents() {
        this.goToSlide();
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
        this.getSlidesList[numCurrentSlide].classList.add('show-slide');
    }

    hideCurrentSlide(numCurrentSlide: number): void {
        this.getSlidesList[numCurrentSlide].classList.remove('show-slide');
    }

    goToSlide(): void {
        this.addEventListener('click', (event: any) => {
            const showing = event.target.closest('.choose');
            if (showing) {
                const numCurrentSlide: number = this.getNumCurrentSlide;
                this.hideCurrentSlide(numCurrentSlide);
                const newCurrentSlide = this.getNewCurrentSlide(showing.getAttribute('data-target'), numCurrentSlide, this.getLengthSlidesList);
                this.showNewCurrentSlide(newCurrentSlide);
                this.triggerSlideChange(newCurrentSlide);
            }
        });
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
