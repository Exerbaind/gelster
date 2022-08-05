import createTag from "../../../../js/utils/createTag";

const isMobile = document.documentElement.clientWidth <= 700;

const informationContainer = document.querySelector(".information__container");

function createSaleBlock(sale) {
  const { image, text, link } = sale;

  const saleBlock = createTag("a", "information__saleBlock");
  saleBlock.style.backgroundImage = `url(${image})`;
  saleBlock.setAttribute("href", link);

  const saleBlockOpacity = createTag("div", "information__saleBlockOpacity");

  const saleBlockOpacityText = createTag(
    "p",
    "information__saleBlockOpacityText",
    text
  );

  saleBlockOpacity.appendChild(saleBlockOpacityText);
  saleBlock.appendChild(saleBlockOpacity);

  return saleBlock;
}

function createLeftColumn(sale, sertificates) {
  const column = createTag("div", "information__leftColumn");

  const saleBlock = createSaleBlock(sale);

  column.appendChild(saleBlock);
  informationContainer.appendChild(column);
}

function informationSection(data) {
  const {
    information: { sale, sertificates },
  } = data;

  createLeftColumn(sale, sertificates);
}

export default informationSection;
