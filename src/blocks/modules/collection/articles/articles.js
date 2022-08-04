import collapseContent from "../../../../js/utils/collapseContent";
import createTag from "../../../../js/utils/createTag";
import sectionHandler from "../../../../js/utils/sectionHandler";

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

  // TODO: Переписать на collapseContent
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
  const { articles } = data;

  articles.forEach((item) => createArticle(item, filterByColor, filterByWidth));
}

function createArticle(item, filterByColor, filterByWidth) {
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
  itemImage.setAttribute("alt", `${name}`);
  itemImage.src = image;

  highslideContainer.appendChild(itemImage);
  container.appendChild(highslideContainer);

  const itemInfo = createTag("div", "item__info");

  const itemNumber = createTag("p", "item__number", number);
  itemInfo.appendChild(itemNumber);

  //   TODO: доделать иконки

  const itemName = createTag("p", "item__name", name);
  itemInfo.appendChild(itemName);

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
