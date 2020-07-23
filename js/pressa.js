const showPublishedArticlesBlock = document.querySelectorAll('.article__show-publish-block');
const publishedArticlesBlock = document.querySelectorAll('.article__publish-block');
const closePublishedArticlesBlock = document.querySelectorAll('.published-article_close');


for (let i = 0; i < showPublishedArticlesBlock.length; i++) {
    showPublishedArticlesBlock[i].addEventListener('click', function () {
        for (let k = 0; k < publishedArticlesBlock.length; k++) {
            publishedArticlesBlock[k].classList.add('hide-block');
        }
        publishedArticlesBlock[i].classList.remove('hide-block');
    })
};

for (let i = 0; i < showPublishedArticlesBlock.length; i++) {
    closePublishedArticlesBlock[i].addEventListener('click', function () {
        for (let k = 0; k < publishedArticlesBlock.length; k++) {
            publishedArticlesBlock[k].classList.add('hide-block');
        }
    })
};
