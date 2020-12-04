const sideArticlesHandler = document.querySelectorAll(".side-menu");
const articlesBlock = document.querySelectorAll(".articles");
const closeArticle = document.querySelectorAll(".articles__close_block");

sideArticlesHandler.forEach((item, index) => {
  item.addEventListener("click", function () {
    articlesBlock[index].classList.toggle("show");
  });
});

// открытие и закрытие обзора youtube

let openYouTubeReview = document.querySelector(".youtube-api");
let collectionReview = document.querySelector(".collection-review");

collectionReview.addEventListener("click", function () {
  openYouTubeReview.classList.add("youtube-api__active");
  document.body.classList.add("overflow-hidden");
});

openYouTubeReview.addEventListener("click", function (e) {
  if (e.target == this) {
    openYouTubeReview.classList.remove("youtube-api__active");
    document.body.classList.remove("overflow-hidden");
    player.stopVideo();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code == "Escape") {
    openYouTubeReview.classList.remove("youtube-api__active");
    document.body.classList.remove("overflow-hidden");
    player.stopVideo();
  }
});
