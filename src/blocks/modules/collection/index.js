import aboutSection from "./about/about";
import articlesSection from "./articles/articles";
import tableSection from "./table/table";
import willNeedSection from "./willNeed/willNeed";
import imagesSection from "./images/images";
import informationSection from "./information/information";

function checkCollection() {
  const collectionPath = document.location.pathname;
  const collection = collectionPath
    .replace(".htm", "")
    .replace(".html", "")
    .replace("/new", "");
  const data = require(`../../../database${collection}.json`);
  return data;
}

function checkSidebarType(data) {
  const { menuType } = data;
  const sidebar = require(`../../../database/sideBars/${menuType}.json`);

  return sidebar;
}

function main() {
  const data = checkCollection();
  const sidebarData = checkSidebarType(data);
  console.log(sidebarData);

  articlesSection(data);
  aboutSection(data);
  tableSection(data);
  willNeedSection(data);
  imagesSection(data);
  informationSection(data);
  // сделать редирект на 404 страницу
}

main();
