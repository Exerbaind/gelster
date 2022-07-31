import createTag from "../../../../js/utils/createTag";
import collapseContent from "../../../../js/utils/collapseContent";

const aboutContainer = document.querySelector(".about__container");
const moreHandler = document.querySelector(".about__more");

// variables
let isTextCollapsed = false;
//

function createTitle(data) {
  const { title } = data;
  const aboutTitle = createTag("h1", "about__title", title);

  aboutContainer.appendChild(aboutTitle);
}

function createText(data) {
  const { text } = data;

  const aboutText = createTag("div", "about__content", text);
  aboutContainer.appendChild(aboutText);
}

function aboutSection(data) {
  const { about } = data;

  createTitle(about);
  createText(about);

  moreHandler.onclick = () =>
    (isTextCollapsed = collapseContent(
      aboutContainer,
      isTextCollapsed,
      "300px"
    ));
}

export default aboutSection;
