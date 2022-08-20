// /**
//  * Method that checks whether cls is present in element object.
//  * @param  {Object} ele DOM element which needs to be checked
//  * @param  {Object} cls Classname is tested
//  * @return {Boolean} True if cls is present, false otherwise.
//  */
// function hasClass(ele, cls) {
//   return ele.getAttribute("class").indexOf(cls) > -1;
// }

// /**
//  * Method that adds a class to given element.
//  * @param  {Object} ele DOM element where class needs to be added
//  * @param  {Object} cls Classname which is to be added
//  * @return {null} nothing is returned.
//  */
// function addClass(ele, cls) {
//   if (ele.classList) {
//     ele.classList.add(cls);
//   } else if (!hasClass(ele, cls)) {
//     ele.setAttribute("class", ele.getAttribute("class") + " " + cls);
//   }
// }

// /**
//  * Method that does a check to ensure that class is removed from element.
//  * @param  {Object} ele DOM element where class needs to be removed
//  * @param  {Object} cls Classname which is to be removed
//  * @return {null} Null nothing is returned.
//  */
// function removeClass(ele, cls) {
//   if (ele.classList) {
//     ele.classList.remove(cls);
//   } else if (hasClass(ele, cls)) {
//     ele.setAttribute("class", ele.getAttribute("class").replace(cls, " "));
//   }
// }

// let clickToDropMenu = [
//   ...document.querySelectorAll(".menu-list-item.drop-menu"),
// ];
// let dropMenu = document.querySelectorAll(".drop-menu-list");

// let searchIcon = document.querySelector(".search-block");

// searchIcon.addEventListener("click", function () {
//   document.getElementById("search-form").classList.add("search-act");
// });

// document.addEventListener("keydown", function (e) {
//   if (e.code == "Escape" || e.keyCode === 13) {
//     document.getElementById("search-form").classList.remove("search-act");
//   }
// });

// document.getElementById("search-form").addEventListener("click", function (e) {
//   if (
//     e.target != document.getElementById("search-form") &&
//     e.target != document.querySelector(".input-area")
//   ) {
//     document.getElementById("search-form").classList.remove("search-act");
//   }
// });

// document.querySelector(".hamburger").addEventListener("click", function () {
//   // document.body.classList.toggle("translate-50");
//   document.querySelector(".menu_h").classList.toggle("mobile-menu_show");
//   document.querySelector(".hamburger").classList.toggle("hamb-act");
// });

// $(window).scroll(function () {
//   if (document.querySelector(".hamburger").classList.contains("hamb-act")) {
//     if ($(window).scrollTop() > 100) {
//       document.querySelector(".hamburger").classList.remove("hamb-act");
//       document.querySelector(".menu_h").classList.remove("mobile-menu_show");
//       // document.body.classList.remove("translate-50");
//     }
//   }
// });
// var mobile = document.documentElement.clientWidth;
// if (mobile < 960) {
//   for (let index = 0; index < clickToDropMenu.length; index++) {
//     clickToDropMenu[index].addEventListener("click", function () {
//       dropMenu[index].classList.toggle("mobile-drop-menu_show");
//     });
//   }
//   // clickToDropMenu.forEach((menu, index) => {
//   //   menu.addEventListener("click", function () {
//   //     dropMenu[index].classList.toggle("mobile-drop-menu_show");
//   //   });
//   // });
// } else {
//   for (let index = 0; index < clickToDropMenu.length; index++) {
//     clickToDropMenu[index].addEventListener("click", function () {
//       if (dropMenu[index].classList.contains("drop-menu_open")) {
//         dropMenu[0].classList.remove("drop-menu_open") ||
//           dropMenu[1].classList.remove("drop-menu_open");
//         dropMenu[index].classList.remove("drop-menu_open");
//       } else {
//         dropMenu[0].classList.remove("drop-menu_open") ||
//           dropMenu[1].classList.remove("drop-menu_open");
//         dropMenu[index].classList.add("drop-menu_open");
//       }
//     });
//   }
//   // clickToDropMenu.forEach((menu, index) => {
//   //   menu.addEventListener("click", function () {
//   //     if (dropMenu[index].classList.contains("drop-menu_open")) {
//   //       dropMenu[0].classList.remove("drop-menu_open") ||
//   //         dropMenu[1].classList.remove("drop-menu_open");
//   //       dropMenu[index].classList.remove("drop-menu_open");
//   //     } else {
//   //       dropMenu[0].classList.remove("drop-menu_open") ||
//   //         dropMenu[1].classList.remove("drop-menu_open");
//   //       dropMenu[index].classList.add("drop-menu_open");
//   //     }
//   //   });
//   // });
// }

const searchHandler = document.querySelector(".search-block") || null;
const searchForm = document.getElementById("search-form") || null;
const headerDropdownHandler = [
  ...(document.querySelectorAll(".menu-list-item.drop-menu") || null),
];
const headerDropdown = document.querySelectorAll(".drop-menu-list") || null;

const isMobile = document.documentElement.clientWidth <= 700;

searchForm.addEventListener("click", function (e) {
  if (
    e.target != document.getElementById("search-form") &&
    e.target != document.querySelector(".input-area")
  ) {
    document.getElementById("search-form").classList.remove("search-act");
  }
});

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".menu_h").classList.toggle("mobile-menu_show");
  document.querySelector(".hamburger").classList.toggle("hamb-act");
});

window.addEventListener("scroll", () => {
  const windwoScrollY = window.pageYOffset;
  if (windwoScrollY > 100) {
    headerDropdown.forEach((item) => item.classList.remove("drop-menu_open"));
    for (let index = 0; index < headerDropdownHandler.length; index++) {
      headerDropdownHandler[index].addEventListener("click", function () {
        headerDropdown[index].classList.remove("mobile-drop-menu_show");
      });
    }
    document.querySelector(".menu_h").classList.remove("mobile-menu_show");
    document.querySelector(".hamburger").classList.remove("hamb-act");
  }
});

function main() {
  searchHandler.onclick = () => searchForm.classList.add("search-act");
  if (!isMobile) {
    headerDropdownHandler[0].onclick = () => {
      headerDropdown[0].classList.toggle("drop-menu_open");
      headerDropdown[1].classList.remove("drop-menu_open");
    };
    headerDropdownHandler[1].onclick = () => {
      headerDropdown[1].classList.toggle("drop-menu_open");
      headerDropdown[0].classList.remove("drop-menu_open");
    };
  } else {
    for (let index = 0; index < headerDropdownHandler.length; index++) {
      headerDropdownHandler[index].addEventListener("click", function () {
        headerDropdown[index].classList.toggle("mobile-drop-menu_show");
      });
    }
  }
}

main();
