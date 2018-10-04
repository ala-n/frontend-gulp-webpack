// function hideAllNews() {
//     let newsList : any = document.querySelectorAll('#list-news>article');
//     for (let i = 0; i < newsList.length; ++i) {
//         newsList[i].style.display = 'none';
//     }
// }
//
// function showNews1() {
//     hideAllNews();
//     let news1 = document.getElementById('news-1');
//     news1.style.display = "block";
//
// }
//
// function showNews2() {
//     hideAllNews();
//     let news2 = document.getElementById('news-2');
//     news2.style.display = "block";
//
// }
//
//
// document.querySelector('.button-chose-3').addEventListener('click', showNews3);
// document.querySelector('.button-chose-2').addEventListener('click', showNews2);
// document.querySelector('.button-chose-1').addEventListener('click', showNews1);
//
// document.querySelector('.arrow prev').addEventListener('click', showNews2);
// (function () {

/*function initCarouselDots() {
    let currentSlide = 0;
    const carousels:any = document.getElementsByClassName('slider');
    for (let index = 0; index < carousels.length; index++) {
        goToSlide(currentSlide, carousels[index].id, currentSlide);
    }
}*/

function getCurrentSlide(id: number) {
    const currentSlider: any = document.getElementById(`${id}`+'-slider');
    return currentSlider.querySelector('.dot').title - 1;
}

function goToSlide(currentSlide: number, id: number, nextSlide: number) {
    // const currentCarousel = document.getElementById(`${id}`);
    // const slides: any = currentCarousel.querySelector('.slider-items');
    // console.log(slides);
    // const navDots = currentCarousel.getElementsByClassName('carousel-dot');
    // slides[currentSlide].classList.remove('showing');
    // navDots[currentSlide].classList.remove('active-dot');
    // currentSlide = (nextSlide + slides.length) % slides.length;
    // slides[currentSlide].classList.add('showing');
    // navDots[currentSlide].classList.add('active-dot');
}


function clickPreviousSlide() {
    const previousArrows = document.querySelectorAll('.previous');
    for (let index = 0; index < previousArrows.length; index++) {
        previousArrows[index].addEventListener('click', (event) => {
            const target: any = event.target;
            const sliderId: number = target.closest('.slider').id.split('-')[0];
            const currentSlide: number = getCurrentSlide(sliderId);//номер слайда
            // goToSlide(currentSlide, carouselId, currentSlide - 1);
        })
    }
}

// function clickNextSlide() {
//     const nextArrows = document.getElementsByClassName('arrow-next-btn');
//     for (let index = 0; index < nextArrows.length; index++) {
//         nextArrows[index].addEventListener('click', (event) => {
//             const target:any = event.target;
//             const carouselId = target.closest('slider').id;
//             const currentSlide = getCurrentSlide(carouselId);
//             goToSlide(currentSlide, carouselId, currentSlide + 1);
//         });
//     }
// }
//
// function clickDot() {
//     const dotsArray = document.getElementsByClassName('dots-wrapper');
//     for (let index = 0; index < dotsArray.length; index++) {
//         dotsArray[index].addEventListener('click', (event) => {
//             const target:any = event.target;
//             if(target.title) {
//                 const carouselId = target.closest('slider').id;
//                 const currentSlide = getCurrentSlide(carouselId);
//                 goToSlide(currentSlide, carouselId, target.title - 1);
//             }
//         });
//     }
// }
//
// initCarouselDots();
clickPreviousSlide();
// clickNextSlide();
// clickDot();
// }());