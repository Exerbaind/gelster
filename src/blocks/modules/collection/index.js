import aboutSection from "./about/about";
import articlesSection from "./articles/articles";
import tableSection from "./table/table";
import willNeedSection from "./willNeed/willNeed";
import imagesSection from "./images/images";
import informationSection from "./information/information";
import { sertificatesSection } from "./sertificates/sertificates";

const isMobile = document.documentElement.clientWidth <= 700;

function checkCollection() {
  const collectionPath = document.location.pathname;
  const collection = collectionPath
    .replace(".htm", "")
    .replace(".html", "")
    .replace("/new", "");
  const data = require(`../../../database${collection}.json`);
  return data;
}

function main() {
  const data = checkCollection();
  articlesSection(data);
  aboutSection(data);
  tableSection(data);
  willNeedSection(data);
  imagesSection(data);
  informationSection(data);
  if (isMobile) sertificatesSection(data);
  // сделать редирект на 404 страницу
}

main();
