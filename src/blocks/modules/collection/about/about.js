import createTag from "../../../../js/utils/createTag";
import collapseContent from "../../../../js/utils/collapseContent";
import clearPrerender from "../../../../js/utils/clearPrerender";

const aboutContainer = document.querySelector(
  ".main__container .about__container"
);
const aboutHeader = document.querySelector(".main__container .about__header");
const moreHandler = document.querySelector(".main__container .about__more");
const moreButtonText = document.querySelector(
  ".main__container .about__more-text"
);
const moreButtonIcon = document.querySelector(
  ".main__container .about__more-icon"
);
const textShadow = document.querySelector(
  ".main__container .about__text-shadow"
);

// variables
let isTextCollapsed = false;
let isRendered = false;
//

function createTitle(data) {
  const { title } = data;
  const aboutTitle = createTag("h1", "about__title", title);
  const aboutToArticlesBlock = createToArticlesBlock();

  aboutHeader.appendChild(aboutTitle);
  aboutHeader.appendChild(aboutToArticlesBlock);

  aboutContainer.appendChild(aboutHeader);
}

function createText(data) {
  const { text } = data;

  const aboutText = createTag("div", "about__content", text);
  aboutContainer.appendChild(aboutText);
}

function createToArticlesBlock() {
  const toArticlesBlock = createTag("a", "about__to-articles");
  toArticlesBlock.setAttribute("href", "#articles");

  const blockText = createTag(
    "span",
    "about__to-articles-text",
    "Смотреть артикулы"
  );

  const iconSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>';
  const blockIcon = createTag("div", "about__to-articles-icon", iconSvg);

  toArticlesBlock.appendChild(blockIcon);
  toArticlesBlock.appendChild(blockText);

  return toArticlesBlock;
}

function aboutSection(data) {
  if (!isRendered) {
    isRendered = clearPrerender("about");
  }

  const { about } = data;

  createTitle(about);
  createText(about);

  moreHandler.onclick = () => {
    isTextCollapsed = collapseContent(aboutContainer, isTextCollapsed, 350);
    textShadow.classList.toggle("about__text-shadow--active");
    moreButtonText.innerHTML = isTextCollapsed ? "скрыть" : "читать далее";
    moreButtonIcon.classList.toggle("about__more-icon--active");
  };
}

export default aboutSection;
