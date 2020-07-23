let desktopClosedSideMenu = document.querySelector(".section-menu"),
    desktopOpenedSideMenu = document.querySelector(".active-menu"),
    desktopMenuArrow = document.querySelector(".menu-arrow");

var desktopSideMenuClicker = 0;

// открытие меню

desktopClosedSideMenu.addEventListener("click", function () {
    if (desktopSideMenuClicker == 0) {
        desktopOpenedSideMenu.classList.add("active-menu_act");
        desktopMenuArrow.classList.remove("animated__menu-arrow");
        desktopOpenedSideMenu.classList.remove("animated__active-menu");
        document
            .querySelector(".section-menu .menu")
            .classList.remove("animated__menu");
        desktopSideMenuClicker++;
        return desktopSideMenuClicker;
    } else {
        desktopMenuArrow.classList.add("animated__menu-arrow");
        desktopOpenedSideMenu.classList.add("animated__active-menu");
        document
            .querySelector(".section-menu .menu")
            .classList.add("animated__menu");
        desktopOpenedSideMenu.classList.remove("active-menu_act");
        desktopSideMenuClicker--;
        return desktopSideMenuClicker;
    }
});

desktopOpenedSideMenu.classList.add("fixed");

// боковое меню

$(window).scroll(function () {
    if (desktopOpenedSideMenu.classList.contains("active-menu_act")) {
        if ($(window).scrollTop() > 80) {
            document.querySelector(".active-menu_act").classList.add("fixed");
        } else {
            document.querySelector(".active-menu_act").classList.remove("fixed");
            // desktopOpenedSideMenu.classList.remove("fixed");
        }
    }
    if ($(window).scrollTop() > 80) {
        document.querySelector(".section-menu .menu").classList.add("top");
        desktopOpenedSideMenu.classList.add("top");
    } else {
        document.querySelector(".section-menu .menu").classList.remove("top");
        desktopOpenedSideMenu.classList.remove("top");
    }
});

// мобильное меню

$(this).scrollTop(0);
var doMenu = document.documentElement.clientWidth;
if (doMenu < 1025) {
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 150) {
            $(".section-menu_mobile").fadeIn();
        } else {
            $(".section-menu_mobile").fadeOut();
        }
    });
}
$(".background-section-hamburger").click(function () {
    $(this).toggleClass("background-section-hamburger_active");
    $(".section-hamburger").toggleClass("section-hamburger_active");
    $(".section-menu_mobile-window").toggleClass("mobile-menu__block_act");
    document.body.classList.toggle("overflow-hidden");
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

// открытие и закрытие видео очистки

let openYouTubeCleanVideo = document.querySelector(".youtube-api-clean");
let cleanPageVideo = document.querySelector(".clean-page");

cleanPageVideo.addEventListener("click", function () {
    openYouTubeCleanVideo.classList.add("youtube-api__active");
    document.body.classList.add("overflow-hidden");
});

openYouTubeCleanVideo.addEventListener("click", function (e) {
    if (e.target == this) {
        openYouTubeCleanVideo.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        playerClean.stopVideo();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
        openYouTubeCleanVideo.classList.remove("youtube-api__active");
        document.body.classList.remove("overflow-hidden");
        playerClean.stopVideo();
    }
});

// открытие форм

let orderMaterial = document.querySelector(".order-material");
let orderMaterialsForm = document.querySelector(".form__order-materials");
let closeOrderMaterialForm = document.querySelector(".close-form");

orderMaterial.addEventListener("click", function () {
    orderMaterialsForm.classList.add("forms__act");
});

let favoursButton = document.querySelector(".item-name_btn");
let favoursForm = document.querySelector(".form__favours");
let closeFavoursForm = document.querySelector(".close-form_f");


// закрытие форм

closeOrderMaterialForm.addEventListener("click", function () {
    orderMaterialsForm.classList.remove("forms__act");
});

document.addEventListener("keydown", function (event) {
    if (event.code == "Escape") {
        orderMaterialsForm.classList.remove("forms__act");
    }
});

orderMaterialsForm.addEventListener("click", function (e) {
    if (e.target == this) {
        orderMaterialsForm.classList.remove("forms__act");
    }
});

closeFavoursForm.addEventListener("click", function () {
    favoursForm.classList.remove("forms__act");
});

document.addEventListener("keydown", function (event) {
    if (event.code == "Escape") {
        favoursForm.classList.remove("forms__act");
    }
});
favoursForm.addEventListener("click", function (e) {
    if (e.target == this) {
        favoursForm.classList.remove("forms__act");
    }
});

// разворот и сворачивание текста 

let showTextBtn = document.querySelector('.show-text');
let textToShow = document.querySelector('.gryaz-info_description .text');
let flag = false;

showTextBtn.addEventListener('click', function () {
    textToShow.classList.toggle('text_active');
    document.querySelector('.show-text__arrow').classList.toggle('show-text__arrow_active');
    flag = !flag;
    if (flag === true) {
        document.querySelector('.show-text__text').innerHTML = 'свернуть';
    } else {
        document.querySelector('.show-text__text').innerHTML = 'читать далее';
    }
})

// разворот артикулов

let articleNumber;
let allHiddenArticles = document.querySelectorAll(".articles-item.hide");
let showAllArticlesBtn = document.querySelector(".gryaz-articles .see-all-collections");

let openAndCloseCollections = true;

showAllArticlesBtn.addEventListener("click", function () {
    if (openAndCloseCollections == true) {
        for (articleNumber = 0; articleNumber < allHiddenArticles.length; articleNumber++) {
            allHiddenArticles[articleNumber].classList.remove("hide");
        }
        document.querySelector(".collections-arrow").classList.add("rotate_180");
        document.querySelector(".text-collections").innerHTML = "скрыть";
        openAndCloseCollections = false;
        return openAndCloseCollections;
    } else {
        for (articleNumber = 0; articleNumber < allHiddenArticles.length; articleNumber++) {
            allHiddenArticles[articleNumber].classList.add("hide");
        }
        document.querySelector(".collections-arrow").classList.remove("rotate_180");
        document.querySelector(".text-collections").innerHTML =
            "развернуть коллекцию";
        openAndCloseCollections = true;
        return openAndCloseCollections;
    }
});