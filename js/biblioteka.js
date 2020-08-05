const sideArticlesHandler = document.querySelectorAll('.side-menu');
const articlesBlock = document.querySelectorAll('.articles');
const closeArticle = document.querySelectorAll('.articles__close_block');

sideArticlesHandler.forEach((item, index) => {
    item.addEventListener('click', function () {
        articlesBlock[index].classList.toggle('show');
    })
});

// closeArticle.forEach((item, index) => {
//     item.addEventListener('click', function () {
//         articlesBlock[index].classList.remove('show');
//     })
// });