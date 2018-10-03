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
// function showNews3() {
//     hideAllNews();
//     let news3 = document.getElementById('news-3');
//     news3.style.display = "block";
//
// }
//
// document.querySelector('.button-chose-3').addEventListener('click', showNews3);
// document.querySelector('.button-chose-2').addEventListener('click', showNews2);
// document.querySelector('.button-chose-1').addEventListener('click', showNews1);
//
// document.querySelector('.arrow prev').addEventListener('click', showNews2);
(function () {
    const next:any = document.querySelector('.arrow-next-slide');
    console.log(next, 3);

    next.onclick = () => {
        goToSlide(currentSlide + 1);
    };

    let slides:any = document.querySelectorAll('.carousel-items .carousel-item');

    let currentSlide = 0;
    goToSlide(1);

    function goToSlide(n:number) {
        slides[currentSlide].className = 'carousel-item';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'carousel-item showing';
    }

    const previous:any = document.querySelector('.arrow-previous-slide');

    previous.onclick = function () {
        goToSlide(currentSlide - 1);
    };
}());