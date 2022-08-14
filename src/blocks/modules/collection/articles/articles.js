import collapseContent from "../../../../js/utils/collapseContent";
import createTag from "../../../../js/utils/createTag";
import sectionHandler from "../../../../js/utils/sectionHandler";
import { openVideoModal } from "../videoModal/videoModal";

// screenType

const isMobile = document.documentElement.clientWidth <= 700;

// globl variables

const mainArticles = document.querySelector(".articles__container");
const articlesContainer = document.querySelector(".articles__list");
const articlesSectionHandlerButton =
  document.querySelector(".articles__handler") || null;
const articlesSectionHandlerButtonIcon =
  document.querySelector(".articles__handler-icon") || null;
const moreArticlesContainer =
  document.querySelector(".articles__more-container") || null;
let moreArticlesButton =
  document.querySelector(".articles__more-button") || null;
let moreArticlesButtonText =
  document.querySelector(".articles__more-text") || null;
let moreArticlesButtonIcon =
  document.querySelector(".articles__more-icon") || null;
let articlesOnPage = document.querySelectorAll(".articles__item") || 0;

const neededNumberOfArticles = isMobile ? 6 : 5;

const videoIcon =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="467.77px" height="303.871px" viewBox="0 0 467.77 303.871" enable-background="new 0 0 467.77 303.871" xml:space="preserve"><path d="M438.32,58.7c-0.95,0.36-1.438,0.46-1.818,0.7c-29.23,18.58-58.462,37.12-87.58,55.86c-1.382,0.89-2.33,3.49-2.342,5.29c-0.158,20.49,0,40.991-0.198,61.479c-0.03,3.75,0.988,5.932,4.26,7.979c26.09,16.382,52.03,32.972,78.02,49.49c3.04,1.931,6.092,3.84,9.66,6.09L438.32,58.7L438.32,58.7z M177.29,274.77v-0.021c44.979,0,89.96,0.021,134.948-0.011c10.83,0,13.87-3.079,13.87-14.038c0.021-72.48,0.01-144.951,0-217.421c0-11.19-2.97-14.12-14.29-14.12c-67.64,0-135.29,0-202.93,0c-22.82,0-45.648-0.03-68.47,0.05c-7.49,0.02-11.03,3.63-11.21,10.98c-0.05,2-0.03,4-0.03,6c0,71.64,0.01,143.28,0.01,214.92c0,10.57,3.03,13.648,13.65,13.66C87.65,274.77,132.47,274.77,177.29,274.77M346.48,211.74c0,16.82,0.04,32.6-0.03,48.381c-0.02,3.648,0.062,7.398-0.698,10.93c-3.132,14.58-15.33,24.24-30.682,24.27c-40.818,0.091-81.648,0.041-122.47,0.041c-50.148,0-100.3-0.01-150.45-0.021c-20.88,0-33.63-12.709-33.64-33.629C8.49,188.23,8.49,114.76,8.51,41.28C8.52,21.57,21.74,8.5,41.55,8.5c90.47-0.01,180.95,0,271.42,0.01c20.91,0.01,33.51,12.69,33.51,33.66c-0.01,15.99,0,31.99,0.021,47.98c0,0.33,0.118,0.65,0.35,1.76c1.83-1.09,3.479-2.01,5.06-3.02c29.65-18.85,59.312-37.67,88.9-56.6c4.17-2.67,8.27-4.45,13.02-1.89c4.802,2.58,5.44,7.06,5.44,11.98c-0.05,73.14-0.05,146.29,0,219.431c0,4.76-0.71,9.061-5.24,11.59c-4.688,2.629-8.85,1-13.04-1.68c-29.738-19.011-59.54-37.931-89.318-56.861C350.28,213.98,348.86,213.169,346.48,211.74 M438.32,58.7c-0.95,0.36-1.438,0.46-1.818,0.7c-29.23,18.58-58.462,37.12-87.58,55.86c-1.382,0.89-2.33,3.49-2.342,5.29c-0.158,20.49,0,40.991-0.198,61.479c-0.03,3.75,0.988,5.932,4.26,7.979c26.09,16.382,52.03,32.972,78.02,49.49c3.04,1.931,6.092,3.84,9.66,6.09L438.32,58.7L438.32,58.7z M177.29,274.77v-0.021c44.979,0,89.96,0.021,134.948-0.011c10.83,0,13.87-3.079,13.87-14.038c0.021-72.48,0.01-144.951,0-217.421c0-11.19-2.97-14.12-14.29-14.12c-67.64,0-135.29,0-202.93,0c-22.82,0-45.648-0.03-68.47,0.05c-7.49,0.02-11.03,3.63-11.21,10.98c-0.05,2-0.03,4-0.03,6c0,71.64,0.01,143.28,0.01,214.92c0,10.57,3.03,13.648,13.65,13.66C87.65,274.77,132.47,274.77,177.29,274.77z M346.48,211.74c0,16.82,0.04,32.6-0.03,48.381c-0.02,3.648,0.062,7.398-0.698,10.93c-3.132,14.58-15.33,24.24-30.682,24.27c-40.818,0.091-81.648,0.041-122.47,0.041c-50.148,0-100.3-0.01-150.45-0.021c-20.88,0-33.63-12.709-33.64-33.629C8.49,188.23,8.49,114.76,8.51,41.28C8.52,21.57,21.74,8.5,41.55,8.5c90.47-0.01,180.95,0,271.42,0.01c20.91,0.01,33.51,12.69,33.51,33.66c-0.01,15.99,0,31.99,0.021,47.98c0,0.33,0.118,0.65,0.35,1.76c1.83-1.09,3.479-2.01,5.06-3.02c29.65-18.85,59.312-37.67,88.9-56.6c4.17-2.67,8.27-4.45,13.02-1.89c4.802,2.58,5.44,7.06,5.44,11.98c-0.05,73.14-0.05,146.29,0,219.431c0,4.76-0.71,9.061-5.24,11.59c-4.688,2.629-8.85,1-13.04-1.68c-29.738-19.011-59.54-37.931-89.318-56.861C350.28,213.98,348.86,213.169,346.48,211.74z"/></svg>';

// Handlers

let colors = null;
let widths = null;
let colorFilterValue = "all";
let widthFilterValue = "all";
let isArticlesSectionActive = true;

let articlesListDefaultHeight = 0;

function initHandlers(data) {
  colors = document.querySelectorAll(".color__item");
  widths = document.querySelectorAll(".width__item");
  moreArticlesButton = document.querySelector(".articles__more-button") || null;
  moreArticlesButtonText =
    document.querySelector(".articles__more-text") || null;
  moreArticlesButtonIcon =
    document.querySelector(".articles__more-icon") || null;

  if (colors) {
    colors.forEach((item) => {
      item.onclick = () => colorsHandler(item, data);
    });
  }

  if (widths) {
    widths.forEach((item) => {
      item.onclick = () => widthHandler(item, data);
    });
  }

  if (moreArticlesButton) {
    let listIsOpened = false;
    moreArticlesButton.onclick = () => {
      listIsOpened = collapseContent(
        articlesContainer,
        listIsOpened,
        articlesListDefaultHeight,
        mainArticles
      );
      moreArticlesButtonText.innerHTML = listIsOpened
        ? "скрыть"
        : "развернуть коллекцию";
      moreArticlesButtonIcon.classList.toggle("articles__more-icon--active");
    };
  }

  if (articlesSectionHandlerButton) {
    articlesSectionHandlerButton.onclick = () => {
      isArticlesSectionActive = sectionHandler(
        isArticlesSectionActive,
        mainArticles,
        0,
        articlesSectionHandlerButtonIcon,
        "articles__handler-icon--active"
      );
    };
  }
}

function toggleClassName(item) {
  const activeItem = document.querySelector(`.${item.className}--active`);

  if (activeItem) {
    activeItem.classList.remove(`${item.className}--active`);
    item.classList.add(`${item.className}--active`);
  }
}

function colorsHandler(item, data) {
  colorFilterValue = item.dataset.colorValue;

  toggleClassName(item);

  const element = document.querySelector(".articles__list");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  createArticlesList(data, colorFilterValue, widthFilterValue);

  articlesOnPage = document.querySelectorAll(".articles__item") || null;

  if (articlesOnPage && articlesOnPage.length <= neededNumberOfArticles) {
    moreArticlesContainer.classList.add("articles__more-container--disabled");
  } else {
    moreArticlesContainer.classList.remove(
      "articles__more-container--disabled"
    );
  }
}

function widthHandler(item, data) {
  widthFilterValue = item.dataset.widthValue;

  toggleClassName(item);

  const element = document.querySelector(".articles__list");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  createArticlesList(data, colorFilterValue, widthFilterValue);

  articlesOnPage = document.querySelectorAll(".articles__item") || null;

  if (articlesOnPage && articlesOnPage.length <= neededNumberOfArticles) {
    moreArticlesContainer.classList.add("articles__more-container--disabled");
  } else {
    moreArticlesContainer.classList.remove(
      "articles__more-container--disabled"
    );
  }
}

//

let widthFilter = [];
let colorFilter = [];

function createTitle(data) {
  const { name } = data;
  const title = document.querySelector(".articles__title");

  if (isMobile) return null;

  return (title.innerHTML = `Цветовая палитра ${name}`);
}

function createArticlesList(data, filterByColor, filterByWidth) {
  const { articles, type, name } = data;

  articles.forEach((item) =>
    createArticle(item, filterByColor, filterByWidth, type, name)
  );
}

function createArticle(item, filterByColor, filterByWidth, type, collection) {
  const { name, number, color, width, image, video } = item;

  if (filterByColor !== "all") {
    if (filterByColor !== color) {
      return null;
    }
  }

  if (filterByWidth !== "all") {
    const isRender = width.find((item) => item === filterByWidth);
    if (!isRender) {
      return null;
    }
  }

  const container = createTag("div", "articles__item");
  if (color) {
    colorFilter = [...colorFilter, color];
    container.dataset.color = color;
  }
  if (width) {
    widthFilter = [...widthFilter, ...width];
    const itemWidth = width.join(";");
    container.dataset.widthValue = itemWidth;
  }

  const highslideContainer = createTag("a", "item__highslide");
  highslideContainer.setAttribute("href", image);
  highslideContainer.setAttribute(
    "onclick",
    "return hs.expand (this, { captionEval: 'this.thumb.alt' })"
  );

  const itemImage = createTag("img", "item__image");
  itemImage.setAttribute("alt", `${type} ${collection} ${number} ${name}`);
  itemImage.src = image;

  highslideContainer.appendChild(itemImage);
  container.appendChild(highslideContainer);

  const itemInfo = createTag("div", "item__info");

  const itemNumber = createTag("p", "item__number", number);
  itemInfo.appendChild(itemNumber);

  const itemName = createTag("p", "item__name", name);
  itemInfo.appendChild(itemName);

  //   TODO: доделать иконки

  if (video && !isMobile) {
    const itemVideoIcon = createTag("div", "item__videoIcon", videoIcon);
    itemVideoIcon.onclick = () => openVideoModal(video);

    container.appendChild(itemVideoIcon);
  }

  container.appendChild(itemInfo);

  articlesContainer.appendChild(container);
}

function createWidthFilter() {
  const filtersWidth = document.querySelector(".filters__width");
  const widthFilterValues = Array.from(new Set(widthFilter));

  const allWidthButton = createTag(
    "button",
    "width__item width__item--active",
    "Все"
  );
  allWidthButton.dataset.widthValue = "all";

  if (isMobile) {
    const widthText = createTag("p", "filter__text", "Выберите толщину:");

    filtersWidth.appendChild(widthText);
  }

  filtersWidth.appendChild(allWidthButton);

  widthFilterValues.forEach((item) => {
    const widthButton = createTag("button", "width__item", `${item} мм`);
    widthButton.dataset.widthValue = item;

    filtersWidth.appendChild(widthButton);
  });
}

function createColorFilter() {
  const filterColor = document.querySelector(".filters__colors");
  const filterColorValues = Array.from(new Set(colorFilter));

  const allColorsButton = createTag(
    "button",
    "color__item color__item--active"
  );
  allColorsButton.style.backgroundImage = `linear-gradient(to top, ${filterColorValues.join(
    ", "
  )})`;
  allColorsButton.dataset.colorValue = "all";

  if (isMobile) {
    const colorsText = createTag("p", "filter__text", "Выберите цвет:");

    filterColor.appendChild(colorsText);
  }

  filterColor.appendChild(allColorsButton);

  filterColorValues.forEach((item) => {
    const colorButton = createTag("button", "color__item");
    colorButton.style.backgroundColor = item;
    colorButton.dataset.colorValue = item;

    filterColor.appendChild(colorButton);
  });
}

function createmoreArticlesButton() {
  const container = document.querySelector(".articles__more-container");

  const button = createTag("div", "articles__more-button");

  const buttonText = createTag(
    "p",
    "articles__more-text",
    "развернуть коллекцию"
  );

  const buttonIcon =
    '<svg width="19" height="11" viewBox="0 0 19 11" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 9.17939e-07L0.406732 10.5L18.5933 10.5L9.5 9.17939e-07Z"/></svg>';
  const buttonIconContainer = createTag(
    "div",
    "articles__more-icon",
    buttonIcon
  );

  button.appendChild(buttonText);
  button.appendChild(buttonIconContainer);

  container.appendChild(button);
}

function articlesSection(data) {
  createTitle(data);
  createArticlesList(data, colorFilterValue, widthFilterValue);

  if (widthFilter && widthFilter.length) {
    createWidthFilter();
  }

  if (colorFilter && colorFilter.length) {
    createColorFilter();
  }

  if (data.articles.length > neededNumberOfArticles) {
    createmoreArticlesButton(data);
  }

  if (!articlesListDefaultHeight) {
    articlesListDefaultHeight = articlesContainer.offsetHeight;
  }

  initHandlers(data);
}

export default articlesSection;
