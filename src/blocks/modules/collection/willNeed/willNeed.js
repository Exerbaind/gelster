import sectionHandler from "../../../../js/utils/sectionHandler";
import createTag from "../../../../js/utils/createTag";

const isMobile = document.documentElement.clientWidth <= 700;

const mainWillNeed = document.querySelector(".willNeed__container");
const willNeedList = document.querySelector(".willNeed__contentList");
const willNeedSectionHandlerButton =
  document.querySelector(".willNeed__handler") || null;
const willNeedSectionHandlerButtonIcon =
  document.querySelector(".willNeed__handler-icon") || null;

const willNeedNextSlide =
  document.querySelector(".willNeed__blockArrow.next-slide") || null;
const willNeedPrevSlide =
  document.querySelector(".willNeed__blockArrow.prev-slide") || null;

let isWillNeedSectionActive = true;
let listTranslateX = 0;

function nextSlideHandle(otherProductsLength) {
  listTranslateX += 100;
  const isEnd = listTranslateX - otherProductsLength * 100 === 0;
  if (isEnd) {
    listTranslateX = 0;
    willNeedList.style.transform = `translateX(${listTranslateX}vw)`;
  } else {
    willNeedList.style.transform = `translateX(-${listTranslateX}vw)`;
  }
}

function prevSlideHandle(otherProductsLength) {
  listTranslateX -= 100;
  const isStart = listTranslateX < 0;
  if (isStart) {
    listTranslateX = (otherProductsLength - 1) * 100;
    willNeedList.style.transform = `translateX(-${listTranslateX}vw)`;
  } else {
    willNeedList.style.transform = `translateX(-${listTranslateX}vw)`;
  }
}

function createWillNeedItem(item, otherProductsLength) {
  const { name, icon, link, text } = item;
  const tag = link ? "a" : "div";

  const itemContainer = createTag(tag, "willNeed__contentItem");

  if (link) {
    itemContainer.setAttribute("href", link);
  }

  if (!isMobile) {
    itemContainer.style.width = 100 / otherProductsLength + "%";
  }

  const itemName = createTag("p", "willNeed__contentItemName", name);

  const itemImage = createTag("img", "willNeed__contentItemImage");
  itemImage.src = icon;

  itemContainer.appendChild(itemName);
  itemContainer.appendChild(itemImage);

  if (text) {
    const itemText = createTag("p", "willNeed__contentItemText", text);
    itemContainer.appendChild(itemText);
  } else {
    const itemButton = createTag(
      "button",
      "willNeed__contentItemButton",
      "заказать"
    );
    itemContainer.appendChild(itemButton);
  }

  if (isMobile) {
    willNeedList.style.width = `${otherProductsLength}00vw`;
  }

  willNeedList.appendChild(itemContainer);
}

function willNeedSection(data) {
  const { otherProducts } = data;
  const otherProductsLength = otherProducts.length;

  otherProducts.forEach((item) =>
    createWillNeedItem(item, otherProductsLength)
  );

  if (willNeedNextSlide && willNeedPrevSlide && isMobile) {
    willNeedNextSlide.onclick = () => nextSlideHandle(otherProductsLength);
    willNeedPrevSlide.onclick = () => prevSlideHandle(otherProductsLength);
  }

  if (willNeedSectionHandlerButton) {
    willNeedSectionHandlerButton.onclick = () => {
      isWillNeedSectionActive = sectionHandler(
        isWillNeedSectionActive,
        mainWillNeed,
        0,
        willNeedSectionHandlerButtonIcon,
        "willNeed__handler-icon--active"
      );
    };
  }
}

export default willNeedSection;
