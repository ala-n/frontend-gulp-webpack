// (function () {
function getNumCurrentSlide(slider: HTMLDivElement): number {
    const activeDot: HTMLDivElement = slider.querySelector('.active');
    return +activeDot.title - 1;
}

function getNewCurrentSlide(showing: string, numCurrentSlide: number, lengthSlidesList: number, nextDot: number): number {
    let nextSlide: number = 0;
    switch (showing) {
        case 'prev':
            nextSlide = numCurrentSlide - 1;
            break;
        case 'next':
            nextSlide = numCurrentSlide + 1;
            break;
        case 'dot':
            if(nextDot) {
                nextSlide = +nextDot - 1;
            }
            break;
    }
    return (nextSlide + lengthSlidesList) % lengthSlidesList;
}

function showNewCurrentSlide(currentSlide: number, slides: NodeListOf<Element>, dots: NodeListOf<Element>): void {
    slides[currentSlide].classList.add('show-slide');
    dots[currentSlide].classList.add('active');
}

function hideCurrentSlide(numCurrentSlide: number, slides: NodeListOf<Element>, dots: NodeListOf<Element>): void {
    slides[numCurrentSlide].classList.remove('show-slide');
    dots[numCurrentSlide].classList.remove('active');
}

function getSlide(event: any, showing: string): void {
    const slider: HTMLDivElement = event.target.closest('.slider');
    let numCurrentSlide: number = getNumCurrentSlide(slider);
    const slides: NodeListOf<Element> = slider.querySelectorAll('.information');
    const dots: NodeListOf<Element> = slider.querySelectorAll('.dot');
    hideCurrentSlide(numCurrentSlide, slides, dots);
    showNewCurrentSlide(getNewCurrentSlide(showing, numCurrentSlide, slides.length, event.target.title), slides, dots);
}


function clickPreviousSlide() {
    const previousArrows = document.querySelectorAll('.previous');
    for (let index = 0; index < previousArrows.length; index++) {
        previousArrows[index].addEventListener('click', (event: any) => {
            getSlide(event, 'prev');
        })
    }
}

function clickNextSlide() {
    const nextArrows = document.querySelectorAll('.next');
    for (let index = 0; index < nextArrows.length; index++) {
        nextArrows[index].addEventListener('click', (event: any) => {
            getSlide(event, 'next');
        })
    }
}

function clickDot() {
    const dotsArray = document.querySelectorAll('.dots-wrapper');
    for (let index = 0; index < dotsArray.length; index++) {
        dotsArray[index].addEventListener('click', (event: any) => {
            getSlide(event, 'dot');
        });
    }
}

clickPreviousSlide();
clickNextSlide();
clickDot();
// }());