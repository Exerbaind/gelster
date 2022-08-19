const sidebar = document.querySelector(".sidebar") || null;
const sidebarContainer = document.querySelector(".sidebar__container") || null;
const sidebarLinks =
  document.querySelectorAll(".sidebar__contentListItemLink") || null;
const sidebarClose = document.querySelector(".sidebar__containerIcon") || null;
const sidebarHandler = document.querySelector(".sidebar__handler") || null;

const menuHeight = 140;
const footerHeight = 86.5;

window.addEventListener("scroll", () => {
  if (sidebar) {
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
}

main();
