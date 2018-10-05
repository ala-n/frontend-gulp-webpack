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

function initChoosing() {
    let numCurrentSlide: number = 0;
    const sliders: any = document.getElementsByClassName('slider');
    for (let index = 0; index < sliders.length; index++) {
        goToSlide(numCurrentSlide, index + 1, '');
    }
}

function getCurrentSlide(id: number) {
    const currentSlider: any = document.getElementById(`${id}` + '-slider');
    return currentSlider.querySelector('.active-dot').title - 1;
}

function goToSlide(numCurrentSlide: number, id: number, show: any) {
    const currentSlider: any = document.getElementById(`${id}` + '-slider');
    const slides: any = currentSlider.querySelectorAll('.information');
    const dots = currentSlider.querySelectorAll('.dot');
    //const previousArrows = document.querySelectorAll('.previous');
    console.log(numCurrentSlide);

    console.log(show.className);
    switch (show.className) {
        case 'choose previous': {
            dots[numCurrentSlide].classList.remove('active-dot');
            slides[numCurrentSlide].classList.remove('show-elem');
            dots[numCurrentSlide - 1].classList.add('active-dot');
            slides[numCurrentSlide - 1].classList.add('show-elem');
        }
        case 'choose next': {
            dots[numCurrentSlide].classList.remove('active-dot');
            slides[numCurrentSlide].classList.remove('show-elem');
            dots[numCurrentSlide + 1].classList.add('active-dot');
            slides[numCurrentSlide + 1].classList.add('show-elem');
        }
        default:
            dots[numCurrentSlide].classList.add('active-dot');
            slides[numCurrentSlide].classList.add('show-elem');
        //previousArrows[id].classList.add('not-choose');
    }
}


function clickPreviousSlide() {
    const previousArrows = document.querySelectorAll('.previous');
    for (let index = 0; index < previousArrows.length; index++) {
        previousArrows[index].addEventListener('click', (event) => {
            const target: any = event.target;
            const sliderId: number = target.closest('.slider').id.split('-')[0];
            const numCurrentSlide: number = getCurrentSlide(sliderId);//номер слайда
            goToSlide(numCurrentSlide, sliderId, previousArrows[index]);
        })
    }
}

function clickNextSlide() {
    const previousArrows = document.querySelectorAll('.next');
    for (let index = 0; index < previousArrows.length; index++) {
        previousArrows[index].addEventListener('click', (event) => {
            const target: any = event.target;
            const sliderId: number = target.closest('.slider').id.split('-')[0];
            const numCurrentSlide: number = getCurrentSlide(sliderId);//номер слайда
            goToSlide(numCurrentSlide, sliderId, previousArrows[index]);
        })
    }
}
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
initChoosing();
clickPreviousSlide();
clickNextSlide();
// clickDot();
// }());