const year = [...document.querySelectorAll('.years__item')];
const page = [...document.querySelectorAll('.page')];

let dotsSlide = [...document.querySelectorAll('.page.show .dots__item')];
let slideImages = [...document.querySelectorAll('.page.show .slide__img')];
let currentDot = document.querySelector('.page.show .dots__item.filled');
let currentSlide = document.querySelector('.page.show .slide__img.act');
let key = 0;

let slidePrev = document.querySelector('.page.show .slide-prev');
let slideNext = document.querySelector('.page.show .slide-next');

window.onload = slideWithDots();


function chooseYear() {
    year.forEach((item, index) => {
        item.addEventListener('click', function () {
            const currentYear = document.querySelector('.years__item.active');
            const currentPage = document.querySelector('.page.show');
            currentYear.classList.remove('active');
            item.classList.add('active');
            currentPage.classList.remove('show');
            page[index].classList.add('show');


            dotsSlide = [...document.querySelectorAll('.page.show .dots__item')];
            slideImages = [...document.querySelectorAll('.page.show .slide__img')];
            currentDot = document.querySelector('.page.show .dots__item.filled');
            currentSlide = document.querySelector('.page.show .slide__img.act');
            key = 0;

            slidePrev = document.querySelector('.page.show .slide-prev');
            slideNext = document.querySelector('.page.show .slide-next');

            slideWithDots();
        })
    });
};

chooseYear();

function slideWithDots() {
    dotsSlide.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide.classList.remove('act');
            currentDot.classList.remove('filled');
            dot.classList.add('filled');
            slideImages[index].classList.add('act');
            currentDot = document.querySelector('.page.show .dots__item.filled');
            currentSlide = document.querySelector('.page.show .slide__img.act');
            key = index;
            console.log(index)
        })
    });
};

function prevPhoto() {
    if (key > 0) {
        currentDot.classList.remove('filled');
        dotsSlide[key - 1].classList.add('filled');
        currentDot = document.querySelector('.page.show .dots__item.filled');

        currentSlide.classList.remove('act');
        slideImages[key - 1].classList.add('act');
        currentSlide = document.querySelector('.page.show .slide__img.act');

        key = key - 1;
    } else {
        currentDot.classList.remove('filled');
        dotsSlide[slideImages.length - 1].classList.add('filled');
        currentDot = document.querySelector('.page.show .dots__item.filled');

        currentSlide.classList.remove('act');
        slideImages[slideImages.length - 1].classList.add('act');
        currentSlide = document.querySelector('.page.show .slide__img.act');

        key = slideImages.length - 1;
    }
};

function nextPhoto() {
    if (key < slideImages.length - 1) {
        currentDot.classList.remove('filled');
        dotsSlide[key + 1].classList.add('filled');
        currentDot = document.querySelector('.page.show .dots__item.filled');

        currentSlide.classList.remove('act');
        slideImages[key + 1].classList.add('act');
        currentSlide = document.querySelector('.page.show .slide__img.act');

        key = key + 1;
    } else {
        currentDot.classList.remove('filled');
        dotsSlide[0].classList.add('filled');
        currentDot = document.querySelector('.page.show .dots__item.filled');

        currentSlide.classList.remove('act');
        slideImages[0].classList.add('act');
        currentSlide = document.querySelector('.page.show .slide__img.act');

        key = 0;
    }
}