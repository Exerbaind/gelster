let clickToDropMenu = document.querySelectorAll(".menu-list-item.drop-menu");
let dropMenu = document.querySelectorAll(".drop-menu-list");

let searchIcon = document.querySelector(".search-block");

searchIcon.addEventListener("click", function () {
  document.getElementById("search-form").classList.add("search-act");
});

document.addEventListener("keydown", function (e) {
  if (e.code == "Escape" || e.keyCode === 13) {
    document.getElementById("search-form").classList.remove("search-act");
  }
});

document.getElementById("search-form").addEventListener("click", function (e) {
  if (
    e.target != document.getElementById("search-form") &&
    e.target != document.querySelector(".input-area")
  ) {
    document.getElementById("search-form").classList.remove("search-act");
  }
});

document.querySelector(".hamburger").addEventListener("click", function () {
  // document.body.classList.toggle("translate-50");
  document.querySelector(".menu_h").classList.toggle("mobile-menu_show");
  document.querySelector(".hamburger").classList.toggle("hamb-act");
});

$(window).scroll(function () {
  if (document.querySelector(".hamburger").classList.contains("hamb-act")) {
    if ($(window).scrollTop() > 100) {
      document.querySelector(".hamburger").classList.remove("hamb-act");
      document.querySelector(".menu_h").classList.remove("mobile-menu_show");
      // document.body.classList.remove("translate-50");
    }
  }
});

var mobile = document.documentElement.clientWidth;
if (mobile < 960) {
  clickToDropMenu.forEach((menu, index) => {
    menu.addEventListener("click", function () {
      dropMenu[index].classList.toggle("mobile-drop-menu_show");
    });
  });
} else {
  clickToDropMenu.forEach((menu, index) => {
    menu.addEventListener("click", function () {
      if (dropMenu[index].classList.contains("drop-menu_open")) {
        dropMenu[0].classList.remove("drop-menu_open") ||
          dropMenu[1].classList.remove("drop-menu_open");
        dropMenu[index].classList.remove("drop-menu_open");
      } else {
        dropMenu[0].classList.remove("drop-menu_open") ||
          dropMenu[1].classList.remove("drop-menu_open");
        dropMenu[index].classList.add("drop-menu_open");
      }
    });
  });
}
