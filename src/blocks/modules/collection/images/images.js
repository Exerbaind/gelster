import clearPrerender from "../../../../js/utils/clearPrerender";
import createTag from "../../../../js/utils/createTag";
import { openForm } from "../forms/forms";
import { openVideoModal } from "../videoModal/videoModal";

const imagesContainer = document.querySelector(
  ".main__container .images__container"
);

let isRendered = false;

function createMainImage(mainImage) {
  const image = createTag("div", "images__mainImage");
  image.style.backgroundImage = `url(${mainImage})`;

  imagesContainer.appendChild(image);
}

function createVideoImage(videoImage) {
  const { image, video } = videoImage;
  const imageWrapper = createTag("div", "images__videoImage");
  imageWrapper.style.backgroundImage = `url(${image})`;

  if (video) {
    const imageOpacity = createTag("div", "images__videoImageOpacity");

    const imageOpacityText = createTag(
      "p",
      "images__videdoImageOpacityText",
      "видео-обзор<br/>КОЛЛЕКЦИИ"
    );
    const opacityIcon =
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="467.77px" height="303.871px" viewBox="0 0 467.77 303.871" enable-background="new 0 0 467.77 303.871" xml:space="preserve"><path d="M438.32,58.7c-0.95,0.36-1.438,0.46-1.818,0.7c-29.23,18.58-58.462,37.12-87.58,55.86c-1.382,0.89-2.33,3.49-2.342,5.29c-0.158,20.49,0,40.991-0.198,61.479c-0.03,3.75,0.988,5.932,4.26,7.979c26.09,16.382,52.03,32.972,78.02,49.49c3.04,1.931,6.092,3.84,9.66,6.09L438.32,58.7L438.32,58.7z M177.29,274.77v-0.021c44.979,0,89.96,0.021,134.948-0.011c10.83,0,13.87-3.079,13.87-14.038c0.021-72.48,0.01-144.951,0-217.421c0-11.19-2.97-14.12-14.29-14.12c-67.64,0-135.29,0-202.93,0c-22.82,0-45.648-0.03-68.47,0.05c-7.49,0.02-11.03,3.63-11.21,10.98c-0.05,2-0.03,4-0.03,6c0,71.64,0.01,143.28,0.01,214.92c0,10.57,3.03,13.648,13.65,13.66C87.65,274.77,132.47,274.77,177.29,274.77M346.48,211.74c0,16.82,0.04,32.6-0.03,48.381c-0.02,3.648,0.062,7.398-0.698,10.93c-3.132,14.58-15.33,24.24-30.682,24.27c-40.818,0.091-81.648,0.041-122.47,0.041c-50.148,0-100.3-0.01-150.45-0.021c-20.88,0-33.63-12.709-33.64-33.629C8.49,188.23,8.49,114.76,8.51,41.28C8.52,21.57,21.74,8.5,41.55,8.5c90.47-0.01,180.95,0,271.42,0.01c20.91,0.01,33.51,12.69,33.51,33.66c-0.01,15.99,0,31.99,0.021,47.98c0,0.33,0.118,0.65,0.35,1.76c1.83-1.09,3.479-2.01,5.06-3.02c29.65-18.85,59.312-37.67,88.9-56.6c4.17-2.67,8.27-4.45,13.02-1.89c4.802,2.58,5.44,7.06,5.44,11.98c-0.05,73.14-0.05,146.29,0,219.431c0,4.76-0.71,9.061-5.24,11.59c-4.688,2.629-8.85,1-13.04-1.68c-29.738-19.011-59.54-37.931-89.318-56.861C350.28,213.98,348.86,213.169,346.48,211.74 M438.32,58.7c-0.95,0.36-1.438,0.46-1.818,0.7c-29.23,18.58-58.462,37.12-87.58,55.86c-1.382,0.89-2.33,3.49-2.342,5.29c-0.158,20.49,0,40.991-0.198,61.479c-0.03,3.75,0.988,5.932,4.26,7.979c26.09,16.382,52.03,32.972,78.02,49.49c3.04,1.931,6.092,3.84,9.66,6.09L438.32,58.7L438.32,58.7z M177.29,274.77v-0.021c44.979,0,89.96,0.021,134.948-0.011c10.83,0,13.87-3.079,13.87-14.038c0.021-72.48,0.01-144.951,0-217.421c0-11.19-2.97-14.12-14.29-14.12c-67.64,0-135.29,0-202.93,0c-22.82,0-45.648-0.03-68.47,0.05c-7.49,0.02-11.03,3.63-11.21,10.98c-0.05,2-0.03,4-0.03,6c0,71.64,0.01,143.28,0.01,214.92c0,10.57,3.03,13.648,13.65,13.66C87.65,274.77,132.47,274.77,177.29,274.77z M346.48,211.74c0,16.82,0.04,32.6-0.03,48.381c-0.02,3.648,0.062,7.398-0.698,10.93c-3.132,14.58-15.33,24.24-30.682,24.27c-40.818,0.091-81.648,0.041-122.47,0.041c-50.148,0-100.3-0.01-150.45-0.021c-20.88,0-33.63-12.709-33.64-33.629C8.49,188.23,8.49,114.76,8.51,41.28C8.52,21.57,21.74,8.5,41.55,8.5c90.47-0.01,180.95,0,271.42,0.01c20.91,0.01,33.51,12.69,33.51,33.66c-0.01,15.99,0,31.99,0.021,47.98c0,0.33,0.118,0.65,0.35,1.76c1.83-1.09,3.479-2.01,5.06-3.02c29.65-18.85,59.312-37.67,88.9-56.6c4.17-2.67,8.27-4.45,13.02-1.89c4.802,2.58,5.44,7.06,5.44,11.98c-0.05,73.14-0.05,146.29,0,219.431c0,4.76-0.71,9.061-5.24,11.59c-4.688,2.629-8.85,1-13.04-1.68c-29.738-19.011-59.54-37.931-89.318-56.861C350.28,213.98,348.86,213.169,346.48,211.74z"/></svg>';

    const imageOpacityIcon = createTag(
      "div",
      "images__videoImageOpacityIcon",
      opacityIcon
    );

    imageOpacity.appendChild(imageOpacityIcon);
    imageOpacity.appendChild(imageOpacityText);
    imageWrapper.appendChild(imageOpacity);

    imageWrapper.onclick = () => openVideoModal(video, true);
  }

  imagesContainer.appendChild(imageWrapper);
}

function createLinkImage(linkImage) {
  const { image, url } = linkImage;
  const imageWrapper = createTag("a", "images__linkImage");
  imageWrapper.style.backgroundImage = `url(${image})`;
  imageWrapper.setAttribute("href", url);

  const imageOpacity = createTag("div", "images__linkImageOpacity");

  const imageOpacityText = createTag(
    "p",
    "images__linkImageOpacityText",
    "СМОТРЕТЬ ВСЕ<br/>РЕАЛИЗОВАННЫЕ<br/>ПРОЕКТЫ"
  );

  const opacityIcon =
    '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/></svg>';

  const imageOpacityIcon = createTag(
    "div",
    "images__linkImageOpacityIcon",
    opacityIcon
  );

  imageOpacity.appendChild(imageOpacityIcon);
  imageOpacity.appendChild(imageOpacityText);
  imageWrapper.appendChild(imageOpacity);
  return imageWrapper;
}

function createFormImage(formImage) {
  const image = createTag("div", "images__formImage");
  image.style.backgroundImage = `url(${formImage})`;

  const imageOpacity = createTag("div", "images__formImageOpacity");

  const imageOpacityText = createTag(
    "p",
    "images__formImageOpacityText",
    "ЗАКАЗАТЬ<br/>ЭТОТ МАТЕРИАЛ"
  );

  const opacityIcon =
    '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/></svg>';

  const imageOpacityIcon = createTag(
    "div",
    "images__formImageOpacityIcon",
    opacityIcon
  );

  image.onclick = () => openForm(null, "formArticle");

  imageOpacity.appendChild(imageOpacityIcon);
  imageOpacity.appendChild(imageOpacityText);
  image.appendChild(imageOpacity);
  return image;
}

function createCollectionName(name) {
  const nameBlock = createTag("div", "images__nameBlock");
  const nameBlockText = createTag("p", "images__nameBlockText", name);

  nameBlock.appendChild(nameBlockText);

  return nameBlock;
}

function createGroupImages(linkImage, formImage, name) {
  const groupImages = createTag("div", "images__groupImages");

  const imageForm = createFormImage(formImage);
  const imageLink = createLinkImage(linkImage);
  const collectionName = createCollectionName(name);

  groupImages.appendChild(imageForm);
  groupImages.appendChild(imageLink);
  groupImages.appendChild(collectionName);

  imagesContainer.appendChild(groupImages);
}

function imagesSection(data) {
  if (!isRendered) {
    isRendered = clearPrerender("images");
  }
  const {
    name,
    images: { mainImage, videoImage, linkImage, formImage },
  } = data;

  createMainImage(mainImage);
  createVideoImage(videoImage);
  createGroupImages(linkImage, formImage, name);
}

export default imagesSection;
