// открытие и закрытие обзора youtube

let openYouTubeReview6 = document.querySelector(".youtube-api-6");
let collectionReview6 = document.querySelector("#video6");

collectionReview6.addEventListener("click", function () {
    openYouTubeReview6.classList.add("youtube-api__active");
    document.body.classList.add("overflow-hidden");
});

openYouTubeReview6.addEventListener("click", function (e) {
    if (e.target == this) {
        openYouTubeReview6.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        player6.stopVideo();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
        openYouTubeReview6.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        player6.stopVideo();
    }
});



let openYouTubeReview61 = document.querySelector(".youtube-api-61");
let collectionReview61 = document.querySelector("#video61");

collectionReview61.addEventListener("click", function () {
    openYouTubeReview61.classList.add("youtube-api__active");
    document.body.classList.add("overflow-hidden");
});

openYouTubeReview61.addEventListener("click", function (e) {
    if (e.target == this) {
        openYouTubeReview61.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        player61.stopVideo();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
        openYouTubeReview61.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        player61.stopVideo();
    }
});

let openYouTubeReview62 = document.querySelector(".youtube-api-62");
let collectionReview62 = document.querySelector("#video62");

collectionReview62.addEventListener("click", function () {
    openYouTubeReview62.classList.add("youtube-api__active");
    document.body.classList.add("overflow-hidden");
});

openYouTubeReview62.addEventListener("click", function (e) {
    if (e.target == this) {
        openYouTubeReview62.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        player62.stopVideo();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
        openYouTubeReview62.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        player62.stopVideo();
    }
});


let openYouTubeReview64 = document.querySelector(".youtube-api-64");
let collectionReview64 = document.querySelector("#video64");

collectionReview64.addEventListener("click", function () {
    openYouTubeReview64.classList.add("youtube-api__active");
    document.body.classList.add("overflow-hidden");
});

openYouTubeReview64.addEventListener("click", function (e) {
    if (e.target == this) {
        openYouTubeReview64.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        player64.stopVideo();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
        openYouTubeReview64.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        player64.stopVideo();
    }
});