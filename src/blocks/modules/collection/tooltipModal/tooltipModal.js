import createTag from "../../../../js/utils/createTag";

const tooltipModal = document.querySelector(".tooltipModal");
const tooltipTitle = document.querySelector(".tooltipModal__headerTitle");
const tooltipText = document.querySelector(".tooltipModal__text");
const tooltipImage = document.querySelector(".tooltipModal__image");

document.addEventListener(
  "click",
  function (event) {
    if (event.target.matches(".tooltipModal")) {
      closeTooltip();
    }
  },
  false
);

export function openTooltip(tooltip) {
  const { title, text, image } = tooltip;

  tooltipTitle.innerHTML = "";
  tooltipText.innerHTML = "";
  tooltipImage.innerHTML = "";

  if (title) tooltipTitle.innerHTML = title;
  if (text) tooltipText.innerHTML = text;
  if (image) {
    const imageBlock = createTag("img", "");
    imageBlock.src = image;
    tooltipImage.appendChild(imageBlock);
  }

  tooltipModal.classList.add("tooltipModal--active");
}

export function closeTooltip() {
  tooltipModal.classList.remove("tooltipModal--active");
}
