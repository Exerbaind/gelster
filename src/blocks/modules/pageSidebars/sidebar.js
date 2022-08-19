const sidebar = document.querySelector(".sidebar") || null;
const sidebarContainer = document.querySelector(".sidebar__container") || null;
const sidebarLinks =
  document.querySelectorAll(".sidebar__contentListItemLink") || null;
const sidebarClose = document.querySelector(".sidebar__containerIcon") || null;
const sidebarHandler = document.querySelector(".sidebar__handler") || null;
const sidebarMobileHandler =
  document.querySelector(".sidebar__mobileHandler") || null;

const mobileMenuBurgerIcon =
  '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>';

const mobileMenuCloseIcon =
  '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>';

const menuHeight = 140;
const footerHeight = 86.5;

let isMobileMenuOpened = false;

const isTablet = document.documentElement.clientWidth <= 1200;

window.addEventListener("scroll", () => {
  if (sidebar && !isTablet) {
    const windwoScrollY = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const screenHeight = document.documentElement.clientHeight;

    if (windwoScrollY < 140) {
      sidebar.style.top = `${menuHeight - windwoScrollY}px`;
    } else {
      sidebar.style.top = "0px";
    }

    const summaryScroll = screenHeight + windwoScrollY;

    if (pageHeight - summaryScroll < footerHeight) {
      sidebar.style.height = `calc(100% - ${
        footerHeight - (pageHeight - summaryScroll)
      }px)`;
      console.log(sidebar.style.height);
    } else {
      sidebar.style.height = "100%";
    }
  }
});

function main() {
  if (sidebarLinks) {
    const pageUrl = window.location.pathname;

    sidebarLinks.forEach((item) => {
      if (item.pathname === pageUrl) {
        item.classList.add("sidebar__contentListItemLink--active");
        item.removeAttribute("href");
      }
    });
  }

  if (sidebarHandler && sidebarClose && sidebarContainer) {
    sidebarHandler.onclick = () => {
      sidebarContainer.classList.toggle("sidebar__container--active");
    };

    sidebarClose.onclick = () => {
      sidebarContainer.classList.remove("sidebar__container--active");
    };
  }

  if (sidebarMobileHandler && sidebar && isTablet) {
    sidebarMobileHandler.innerHTML = mobileMenuBurgerIcon;
    sidebarMobileHandler.onclick = function () {
      this.classList.toggle("sidebar__mobileHandler--active");
      sidebar.classList.toggle("sidebar--active");
      isMobileMenuOpened = !isMobileMenuOpened;
      if (isMobileMenuOpened) {
        sidebarMobileHandler.innerHTML = mobileMenuCloseIcon;
      } else {
        sidebarMobileHandler.innerHTML = mobileMenuBurgerIcon;
      }
    };
  }
}

main();
