import createTag from "../.././../../js/utils/createTag";
import { openForm } from "../forms/forms";

const articleOrderModal = document.querySelector(".articleOrderModal");
const articleOrderModalImages = document.querySelectorAll(
  ".articleOrderModal__imagesItem"
);
const articleOrderModalImagesHandlerItems = document.querySelectorAll(
  ".articleOrderModal__imagesHandlerItem"
);
const articleOrderModalTitle = document.querySelector(
  ".articleOrderModal__title"
);
const articleOrderModalWidth = document.querySelector(
  ".articleOrderModal__widthContainer"
);
const articleOrderModalSubmit = document.querySelector(
  ".articleOrderModal__submit"
);

let imageIndex = 0;
let articleNumber;

document.addEventListener(
  "click",
  function (event) {
    if (event.target.matches(".articleOrderModal")) {
      closeArticleOrderModal();
    }
  },
  false
);

export function openArticleOrderModal(article, collection, type) {
  const { image, modalImage, name, number, width } = article;

  const images = [image, modalImage];
  articleNumber = number;

  images.forEach((item, index) => {
    const alt = `${type} ${collection} ${number} ${name} ${
      index === 1 ? "в интерьере" : ""
    }`;
    articleOrderModalImages[index].src = item;
    articleOrderModalImages[index].setAttribute("alt", alt);
  });

  const title = `${type}</br>${collection} ${number} ${name}`;
  articleOrderModalTitle.innerHTML = title;

  width.forEach((item) => {
    const widthItem = createTag(
      "div",
      "articleOrderModal__widthContainerItem",
      `${item} мм`
    );
    articleOrderModalWidth.appendChild(widthItem);
  });

  // handler
  articleOrderModalImagesHandlerItems.forEach((item, index) => {
    item.onclick = () => {
      articleOrderModalImages[imageIndex].classList.remove(
        "articleOrderModal__imagesItem--active"
      );
      articleOrderModalImagesHandlerItems[imageIndex].classList.remove(
        "articleOrderModal__imagesHandlerItem--active"
      );

      imageIndex = index;

      articleOrderModalImages[imageIndex].classList.add(
        "articleOrderModal__imagesItem--active"
      );
      articleOrderModalImagesHandlerItems[imageIndex].classList.add(
        "articleOrderModal__imagesHandlerItem--active"
      );
    };
  });

  articleOrderModal.classList.add("articleOrderModal--active");
}

export function closeArticleOrderModal() {
  articleOrderModal.classList.remove("articleOrderModal--active");

  articleOrderModalImages[imageIndex].classList.remove(
    "articleOrderModal__imagesItem--active"
  );
  articleOrderModalImagesHandlerItems[imageIndex].classList.remove(
    "articleOrderModal__imagesHandlerItem--active"
  );

  imageIndex = 0;

  articleOrderModalImages[imageIndex].classList.add(
    "articleOrderModal__imagesItem--active"
  );
  articleOrderModalImagesHandlerItems[imageIndex].classList.add(
    "articleOrderModal__imagesHandlerItem--active"
  );

  setTimeout(() => {
    while (articleOrderModalWidth.firstChild) {
      articleOrderModalWidth.removeChild(articleOrderModalWidth.firstChild);
    }
  }, 500);
}

function main() {
  articleOrderModalSubmit.onclick = () => {
    closeArticleOrderModal();
    openForm(articleNumber, "formArticle");
  };
}

main();
