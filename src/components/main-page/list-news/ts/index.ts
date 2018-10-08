// (function () {
function getNumCurrentSlide(lengthSlidesList: number, activeDot: number): number {
    return lengthSlidesList-activeDot;
}

function getNewCurrentSlide(showing: string, numCurrentSlide: number, lengthSlidesList: number, activeDot: number): number {
    let nextSlide: number = 0;
    switch (showing) {
        case 'prev':
            nextSlide = numCurrentSlide + 1;
            break;
        case 'next':
            nextSlide = numCurrentSlide  - 1;
            break;
        case 'dot':
            if(activeDot) {
                nextSlide = lengthSlidesList-activeDot;
            }
            break;
    }
    console.log((nextSlide + lengthSlidesList) % lengthSlidesList);
    return (nextSlide + lengthSlidesList) % lengthSlidesList;
}

function showNewCurrentSlide(currentSlide: number, slides: NodeListOf<Element>, dots: NodeListOf<Element>, lengthSlidesList: number): void {
    slides[currentSlide].classList.add('show-slide');
    dots[lengthSlidesList - currentSlide - 1].classList.add('active');
}

function hideCurrentSlide(numCurrentSlide: number, slides: NodeListOf<Element>, dots: NodeListOf<Element>, activeDot: number): void {
    slides[numCurrentSlide].classList.remove('show-slide');
    dots[activeDot - 1].classList.remove('active');
}

function getSlide(event: any, showing: string): void {
    const slider: HTMLDivElement = event.target.closest('.slider');
    const activeDot: HTMLDivElement = slider.querySelector('.active');
    const slides: NodeListOf<Element> = slider.querySelectorAll('.information');
    const dots: NodeListOf<Element> = slider.querySelectorAll('.dot');
    let numCurrentSlide: number = getNumCurrentSlide(slides.length, +activeDot.title);
    hideCurrentSlide(numCurrentSlide, slides, dots,  +activeDot.title);
    showNewCurrentSlide(getNewCurrentSlide(showing, numCurrentSlide, slides.length, event.target.title), slides, dots, slides.length);
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