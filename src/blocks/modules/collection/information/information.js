import createTag from "../../../../js/utils/createTag";
import sectionHandler from "../../../../js/utils/sectionHandler";
import clearPrerender from "../../../../js/utils/clearPrerender";
import { openVideoModal } from "../videoModal/videoModal";

const isMobile = document.documentElement.clientWidth <= 700;

const arrowIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>';
const fileIcon =
  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 54 56" style="enable-background:new 0 0 54 56;" xml:space="preserve"><style type="text/css">.st0{fill:#EDB056;}.st1{fill:none;stroke:#FFFFFF;stroke-width:1.7;}.st2{fill:#FFFFFF;}</style><path class="st0" d="M0,18c0,20.99,17.01,38,38,38c5.72,0,11.14-1.27,16-3.53V0H4.53C1.64,5.36,0,11.49,0,18z"/><g><path class="st1" d="M25.04,15.78h6.69"/><path class="st1" d="M25.04,21.69H38.3"/><path class="st1" d="M25.04,27.6H38.3"/><path class="st1" d="M36.55,8.31H19.87v30.6h23.6V15.65L36.55,8.31z"/><path class="st2" d="M35.48,9.12v6.64c0,0.19,0.16,0.34,0.35,0.34h6.73c0.31,0,0.47-0.37,0.25-0.59l-6.73-6.64C35.87,8.66,35.48,8.81,35.48,9.12z"/></g></svg>';
const videoIcon =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="467.77px" height="303.871px" viewBox="0 0 467.77 303.871" enable-background="new 0 0 467.77 303.871" xml:space="preserve"><path d="M438.32,58.7c-0.95,0.36-1.438,0.46-1.818,0.7c-29.23,18.58-58.462,37.12-87.58,55.86c-1.382,0.89-2.33,3.49-2.342,5.29c-0.158,20.49,0,40.991-0.198,61.479c-0.03,3.75,0.988,5.932,4.26,7.979c26.09,16.382,52.03,32.972,78.02,49.49c3.04,1.931,6.092,3.84,9.66,6.09L438.32,58.7L438.32,58.7z M177.29,274.77v-0.021c44.979,0,89.96,0.021,134.948-0.011c10.83,0,13.87-3.079,13.87-14.038c0.021-72.48,0.01-144.951,0-217.421c0-11.19-2.97-14.12-14.29-14.12c-67.64,0-135.29,0-202.93,0c-22.82,0-45.648-0.03-68.47,0.05c-7.49,0.02-11.03,3.63-11.21,10.98c-0.05,2-0.03,4-0.03,6c0,71.64,0.01,143.28,0.01,214.92c0,10.57,3.03,13.648,13.65,13.66C87.65,274.77,132.47,274.77,177.29,274.77M346.48,211.74c0,16.82,0.04,32.6-0.03,48.381c-0.02,3.648,0.062,7.398-0.698,10.93c-3.132,14.58-15.33,24.24-30.682,24.27c-40.818,0.091-81.648,0.041-122.47,0.041c-50.148,0-100.3-0.01-150.45-0.021c-20.88,0-33.63-12.709-33.64-33.629C8.49,188.23,8.49,114.76,8.51,41.28C8.52,21.57,21.74,8.5,41.55,8.5c90.47-0.01,180.95,0,271.42,0.01c20.91,0.01,33.51,12.69,33.51,33.66c-0.01,15.99,0,31.99,0.021,47.98c0,0.33,0.118,0.65,0.35,1.76c1.83-1.09,3.479-2.01,5.06-3.02c29.65-18.85,59.312-37.67,88.9-56.6c4.17-2.67,8.27-4.45,13.02-1.89c4.802,2.58,5.44,7.06,5.44,11.98c-0.05,73.14-0.05,146.29,0,219.431c0,4.76-0.71,9.061-5.24,11.59c-4.688,2.629-8.85,1-13.04-1.68c-29.738-19.011-59.54-37.931-89.318-56.861C350.28,213.98,348.86,213.169,346.48,211.74 M438.32,58.7c-0.95,0.36-1.438,0.46-1.818,0.7c-29.23,18.58-58.462,37.12-87.58,55.86c-1.382,0.89-2.33,3.49-2.342,5.29c-0.158,20.49,0,40.991-0.198,61.479c-0.03,3.75,0.988,5.932,4.26,7.979c26.09,16.382,52.03,32.972,78.02,49.49c3.04,1.931,6.092,3.84,9.66,6.09L438.32,58.7L438.32,58.7z M177.29,274.77v-0.021c44.979,0,89.96,0.021,134.948-0.011c10.83,0,13.87-3.079,13.87-14.038c0.021-72.48,0.01-144.951,0-217.421c0-11.19-2.97-14.12-14.29-14.12c-67.64,0-135.29,0-202.93,0c-22.82,0-45.648-0.03-68.47,0.05c-7.49,0.02-11.03,3.63-11.21,10.98c-0.05,2-0.03,4-0.03,6c0,71.64,0.01,143.28,0.01,214.92c0,10.57,3.03,13.648,13.65,13.66C87.65,274.77,132.47,274.77,177.29,274.77z M346.48,211.74c0,16.82,0.04,32.6-0.03,48.381c-0.02,3.648,0.062,7.398-0.698,10.93c-3.132,14.58-15.33,24.24-30.682,24.27c-40.818,0.091-81.648,0.041-122.47,0.041c-50.148,0-100.3-0.01-150.45-0.021c-20.88,0-33.63-12.709-33.64-33.629C8.49,188.23,8.49,114.76,8.51,41.28C8.52,21.57,21.74,8.5,41.55,8.5c90.47-0.01,180.95,0,271.42,0.01c20.91,0.01,33.51,12.69,33.51,33.66c-0.01,15.99,0,31.99,0.021,47.98c0,0.33,0.118,0.65,0.35,1.76c1.83-1.09,3.479-2.01,5.06-3.02c29.65-18.85,59.312-37.67,88.9-56.6c4.17-2.67,8.27-4.45,13.02-1.89c4.802,2.58,5.44,7.06,5.44,11.98c-0.05,73.14-0.05,146.29,0,219.431c0,4.76-0.71,9.061-5.24,11.59c-4.688,2.629-8.85,1-13.04-1.68c-29.738-19.011-59.54-37.931-89.318-56.861C350.28,213.98,348.86,213.169,346.48,211.74z"/></svg>';
const playIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 24v-24l20 12-20 12z"/></svg>';

const informationContainer = document.querySelector(
  ".main__container .information__container"
);
const mainInformation = document.querySelector(
  ".main__container .information__wrapper"
);
const informationSectionHandlerButton =
  document.querySelector(".main__container .information__handler") || null;

let isInformationSectionActive = false;
let isRendered = false;

function createSertificatesBlock(parent, sertificates) {
  const container = createTag("div", "information__sertificates");

  sertificates.forEach((item) => {
    const { url, text } = item;
    const block = createTag("a", "information__sertificateItem");

    const blockIcon = createTag(
      "div",
      "information__sertificateItemIcon",
      arrowIcon
    );

    const blockText = createTag("p", "information__sertificateItemText", text);

    block.appendChild(blockIcon);
    block.appendChild(blockText);

    container.appendChild(block);
  });

  parent.appendChild(container);
}

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

  const saleBlockOpacityIcon = createTag(
    "div",
    "information__saleBlockOpacityIcon",
    arrowIcon
  );

  saleBlockOpacity.appendChild(saleBlockOpacityIcon);
  saleBlockOpacity.appendChild(saleBlockOpacityText);
  saleBlock.appendChild(saleBlockOpacity);

  return saleBlock;
}

function createLeftColumn(sale, sertificates) {
  const column = createTag("div", "information__leftColumn");

  const saleBlock = createSaleBlock(sale);

  column.appendChild(saleBlock);

  if (!isMobile) createSertificatesBlock(column, sertificates);
  informationContainer.appendChild(column);
}

function createArticlesBlock(parent, articles) {
  articles.forEach((item) => {
    const { image, text, url } = item;

    const block = createTag("a", "information__articleItem");
    block.style.backgroundImage = `url(${image})`;
    block.setAttribute("href", url);

    const blockOpacity = createTag("div", "information__articleItemOpacity");
    const blockOpacityText = createTag(
      "p",
      "information__articleItemOpacityText",
      text
    );

    const blockOpacityIconArrow = createTag(
      "div",
      "information__articleItemOpacityIconArrow",
      arrowIcon
    );

    const blockOpacityIconFile = createTag(
      "div",
      "information__articleItemOpacityIconFile",
      fileIcon
    );

    blockOpacity.appendChild(blockOpacityText);
    blockOpacity.appendChild(blockOpacityIconArrow);
    blockOpacity.appendChild(blockOpacityIconFile);

    block.appendChild(blockOpacity);
    parent.appendChild(block);
  });
}

function createVideoBlock(parent, data) {
  const { image, text, video } = data;
  const block = createTag("div", "information__videoItem");
  block.style.backgroundImage = `url(${image})`;

  if (video) {
    const blockOpacity = createTag("div", "information__videoItemOpacity");

    const blockOpacityText = createTag(
      "p",
      "information__videoItemOpacityText",
      text
    );

    const blockOpacityIconVideo = createTag(
      "div",
      "information__videoItemOpacityIconVideo",
      videoIcon
    );

    const blockPlayContiner = createTag(
      "div",
      "information__videoItemPlayContainer"
    );
    const blockPlayContainerText = createTag(
      "p",
      "information__videoItemPlayContainerText",
      "смотреть видео"
    );
    const blockPlayContainerIcon = createTag(
      "div",
      "information__videoItemPlayContainerIcon",
      playIcon
    );

    blockOpacity.appendChild(blockOpacityText);
    blockOpacity.appendChild(blockOpacityIconVideo);

    blockPlayContiner.appendChild(blockPlayContainerIcon);
    blockPlayContiner.appendChild(blockPlayContainerText);

    block.appendChild(blockPlayContiner);
    block.appendChild(blockOpacity);

    block.onclick = () => openVideoModal(video, true);
  }

  parent.appendChild(block);
}

function createRightColumn(articles, video, sertificates) {
  const column = createTag("div", "information__rightColumn");

  createArticlesBlock(column, articles);
  createVideoBlock(column, video);

  if (isMobile) createSertificatesBlock(column, sertificates);

  informationContainer.appendChild(column);
}

function informationSection(data) {
  if (!isRendered) {
    isRendered = clearPrerender("information");
  }
  const {
    information: { sale, sertificates, articles, video },
  } = data;

  createLeftColumn(sale, sertificates);
  createRightColumn(articles, video, sertificates);

  if (informationSectionHandlerButton) {
    informationSectionHandlerButton.onclick = () => {
      isInformationSectionActive = sectionHandler(
        isInformationSectionActive,
        mainInformation,
        0,
        informationSectionHandlerButton,
        "information__handler--active"
      );
    };
  }
}

export default informationSection;
