function hideAllNews() {
    let newsList : any = document.querySelectorAll('#list-news>article');
    for (let i = 0; i < newsList.length; ++i) {
        newsList[i].style.display = 'none';
    }
}

function showNews1() {
    hideAllNews();
    let news1 = document.getElementById('news-1');
    news1.style.display = "block";

}

function showNews2() {
    hideAllNews();
    let news2 = document.getElementById('news-2');
    news2.style.display = "block";

}

function showNews3() {
    hideAllNews();
    let news3 = document.getElementById('news-3');
    news3.style.display = "block";

}

document.querySelector('.button-chose-3').addEventListener('click', showNews3);
document.querySelector('.button-chose-2').addEventListener('click', showNews2);
document.querySelector('.button-chose-1').addEventListener('click', showNews1);
