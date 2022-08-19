const tooltipModal = document.querySelector(".tooltipModal");
const tooltipTitle = document.querySelector(".tooltipModal__headerTitle");
const tooltipText = document.querySelector(".tooltipModal__text");

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
  const { title, text } = tooltip;

  tooltipTitle.innerHTML = title;
  tooltipText.innerHTML = text;

  tooltipModal.classList.add("tooltipModal--active");
}

export function closeTooltip() {
  tooltipModal.classList.remove("tooltipModal--active");
}
