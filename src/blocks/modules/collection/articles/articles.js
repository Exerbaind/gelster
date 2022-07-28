// globl variables

const articlesContainer = document.querySelector(".articles__list");

// Handlers

let colors = null;
let widths = null;
let colorFilterValue = "all";
let widthFilterValue = "all";
let listIsOpened = false;

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
}

function widthHandler(item, data) {
  widthFilterValue = item.dataset.widthValue;

  toggleClassName(item);

  const element = document.querySelector(".articles__list");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  createArticlesList(data, colorFilterValue, widthFilterValue);
}

function moreArticlesHandler() {
  const moreButtonText = document.querySelector(".articles__more-text") || null;
  listIsOpened = !listIsOpened;

  if (listIsOpened) {
    moreButtonText.innerHTML = "скрыть";
    return articlesContainer.classList.add("articles__list--active");
  }
  moreButtonText.innerHTML = "раскрыть коллекцию";
  return articlesContainer.classList.remove("articles__list--active");
}

//

let widthFilter = [];
let colorFilter = [];

function checkCollection() {
  const collectionPath = document.location.pathname;
  const collection = collectionPath
    .replace(".htm", "")
    .replace(".html", "")
    .replace("/new", "");
  const data = require(`../../../../database${collection}.json`);
  return data;
}

function createTitle(data) {
  const { name } = data;
  const title = document.querySelector(".articles__title");

  title.innerHTML = `Цветовая палитра ${name}`;
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

  const container = document.createElement("div");
  container.className = "articles__item";
  if (color) {
    colorFilter = [...colorFilter, color];
    container.dataset.color = color;
  }
  if (width) {
    widthFilter = [...widthFilter, ...width];
    const itemWidth = width.join(";");
    container.dataset.widthValue = itemWidth;
  }

  const highslideContainer = document.createElement("a");
  highslideContainer.className = "item__hishslide";
  highslideContainer.setAttribute("href", image);
  highslideContainer.setAttribute(
    "onclick",
    "return hs.expand (this, { captionEval: 'this.thumb.alt' })"
  );

  const itemImage = document.createElement("img");
  itemImage.className = "item__image";
  itemImage.setAttribute("alt", `${name}`);
  itemImage.src = image;

  highslideContainer.appendChild(itemImage);
  container.appendChild(highslideContainer);

  const itemInfo = document.createElement("div");
  itemInfo.className = "item__info";

  const itemNumber = document.createElement("p");
  itemNumber.className = "item__number";
  itemNumber.innerHTML = number;
  itemInfo.appendChild(itemNumber);

  const itemName = document.createElement("p");
  itemName.className = "item__name";
  itemName.innerHTML = name;
  itemInfo.appendChild(itemName);

  container.appendChild(itemInfo);

  articlesContainer.appendChild(container);
}

function createWidthFilter() {
  const filtersWidth = document.querySelector(".filters__width");
  const widthFilterValues = Array.from(new Set(widthFilter));

  const allWidthButton = document.createElement("button");
  allWidthButton.className = "width__item width__item--active";
  allWidthButton.innerHTML = `Все`;
  allWidthButton.dataset.widthValue = "all";

  filtersWidth.appendChild(allWidthButton);

  widthFilterValues.forEach((item) => {
    const widthButton = document.createElement("button");
    widthButton.className = "width__item";
    widthButton.innerHTML = `${item} мм`;
    widthButton.dataset.widthValue = item;

    filtersWidth.appendChild(widthButton);
  });
}

function createColorFilter() {
  const filterColor = document.querySelector(".filters__colors");
  const filterColorValues = Array.from(new Set(colorFilter));

  const allColorsButton = document.createElement("button");
  allColorsButton.className = "color__item color__item--active";
  allColorsButton.style.backgroundImage = `linear-gradient(to top, ${filterColorValues.join(
    ", "
  )})`;
  allColorsButton.dataset.colorValue = "all";

  filterColor.appendChild(allColorsButton);

  filterColorValues.forEach((item) => {
    const colorButton = document.createElement("button");
    colorButton.className = "color__item";
    colorButton.style.backgroundColor = item;
    colorButton.dataset.colorValue = item;

    filterColor.appendChild(colorButton);
  });
}

function initHandlers(data) {
  colors = document.querySelectorAll(".color__item");
  widths = document.querySelectorAll(".width__item");
  moreButton = document.querySelector(".articles__more-button") || null;

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

  if (moreButton) {
    moreButton.onclick = () => moreArticlesHandler();
  }
}

function createMoreButton() {
  const container = document.querySelector(".articles__more-container");

  const button = document.createElement("div");
  button.className = "articles__more-button";

  const buttonText = document.createElement("p");
  buttonText.className = "articles__more-text";
  buttonText.innerHTML = "развернуть коллекцию";
  button.appendChild(buttonText);

  // TODO: допилить иконку стрелки

  return container.appendChild(button);
}

function main() {
  const data = checkCollection();
  createTitle(data);
  createArticlesList(data, colorFilterValue, widthFilterValue);

  if (widthFilter && widthFilter.length) {
    createWidthFilter();
  }

  if (colorFilter && colorFilter.length) {
    createColorFilter();
  }

  if (data.articles.length > 5) {
    createMoreButton(data);
  }

  initHandlers(data);
}

main();
