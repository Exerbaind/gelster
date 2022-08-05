import aboutSection from "./about/about";
import articlesSection from "./articles/articles";
import tableSection from "./table/table";
import willNeedSection from "./willNeed/willNeed";

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
}

main();
