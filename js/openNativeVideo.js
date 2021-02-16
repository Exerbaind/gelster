let openCollectionReview = document.querySelector(".video-collection");

collectionReview.addEventListener("click", function () {
  document.body.classList.add("overflow-hidden");
  openCollectionReview.classList.add("youtube-api__active");
});

document.addEventListener("keydown", function (e) {
  if (e.code == "Escape") {
    openCollectionReview.classList.remove("youtube-api__active");
    document.body.classList.remove("overflow-hidden");
    document.querySelector(".collection-video").pause();
    document.querySelector(".collection-video").currentTime = 0;
  }
});
