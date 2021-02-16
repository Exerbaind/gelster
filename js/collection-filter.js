const filterCategory = [
  ...document.querySelectorAll(".collections-filter__button"),
];
const allCollections = [...document.querySelectorAll(".collection__item")];
let activeCategory;

// Добавление стиля к кнопке

filterCategory.forEach((filter) => {
  filter.addEventListener("click", () => {
    removeActiveFromAll(filterCategory);
    filter.classList.add("collections-filter__button--active");
    currentCategory(filter);
  });
});

// Снять активный класс со всех кнопок

function removeActiveFromAll(list) {
  list.forEach((item) => {
    return item.classList.remove("collections-filter__button--active");
  });
}

function currentCategory(name) {
  switch (name.innerHTML.toLocaleLowerCase()) {
    case "все":
      allCollections.forEach((collection) => {
        collection.classList.remove("collection__item--hide");
      });
      break;
    case "профессиональные":
      allCollections.forEach((collection) => {
        collection.classList.add("collection__item--hide");
      });
      activeCategory = [...document.querySelectorAll(".collection__item.prof")];
      activeCategory.forEach((item) => {
        item.classList.remove("collection__item--hide");
      });
      break;
    case "роликовые":
      allCollections.forEach((collection) => {
        collection.classList.add("collection__item--hide");
      });
      activeCategory = [
        ...document.querySelectorAll(".collection__item.rolik"),
      ];
      activeCategory.forEach((item) => {
        item.classList.remove("collection__item--hide");
      });
      break;
    case "спорт-выставки":
      allCollections.forEach((collection) => {
        collection.classList.add("collection__item--hide");
      });
      activeCategory = [
        ...document.querySelectorAll(".collection__item.sport-vistavki"),
      ];
      activeCategory.forEach((item) => {
        item.classList.remove("collection__item--hide");
      });
      break;
    case "любительские":
      allCollections.forEach((collection) => {
        collection.classList.add("collection__item--hide");
      });
      activeCategory = [
        ...document.querySelectorAll(".collection__item.amateur"),
      ];
      activeCategory.forEach((item) => {
        item.classList.remove("collection__item--hide");
      });
      break;
    case "спорт-выставки":
      allCollections.forEach((collection) => {
        collection.classList.add("collection__item--hide");
      });
      activeCategory = [
        ...document.querySelectorAll(".collection__item.sport-vistavki"),
      ];
      activeCategory.forEach((item) => {
        item.classList.remove("collection__item--hide");
      });
      break;
  }
}
