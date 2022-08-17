import collapseContent from "../../../../js/utils/collapseContent";

const aboutContainer = document.querySelector(".about__container");
const moreHandler = document.querySelector(".about__more");
const moreButtonText = document.querySelector(".about__more-text");
const moreButtonIcon = document.querySelector(".about__more-icon");
const textShadow = document.querySelector(".about__text-shadow");

// variables
let isTextCollapsed = false;
//

function aboutSection() {
  moreHandler.onclick = () => {
    isTextCollapsed = collapseContent(aboutContainer, isTextCollapsed, 350);
    textShadow.classList.toggle("about__text-shadow--active");
    moreButtonText.innerHTML = isTextCollapsed ? "скрыть" : "читать далее";
    moreButtonIcon.classList.toggle("about__more-icon--active");
  };
}

export default aboutSection;
