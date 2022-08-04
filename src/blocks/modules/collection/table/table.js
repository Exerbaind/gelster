import createTag from "../../../../js/utils/createTag";
import collapseContent from "../../../../js/utils/collapseContent";
import sectionHandler from "../../../../js/utils/sectionHandler";

const mainTable = document.querySelector(".table__wrapper");
const tableSectionHandlerButton =
  document.querySelector(".table__handler") || null;
const tableSectionHandlerButtonIcon =
  document.querySelector(".table__handler-icon") || null;
const tableContainer = document.querySelector(".table__container");
const tableHeader = document.querySelector(".table__header");
const tableBody = document.querySelector(".table__body");
const tableHandler = document.querySelector(".table__more");
const tableButtonText = document.querySelector(".table__more-text");
const tableButtonIcon = document.querySelector(".table__more-icon");

let widthIndex = 0;
let widthValue = 0;
let isExtraValuesOpened = false;
let isTableCollapsed = false;
let isTableSectionActive = false;

function separateData(table) {
  const headerContent = table.slice(0, 3);
  const bodyContent = table.slice(3, table.length);

  return { headerContent, bodyContent };
}

function changeTable(value, index, data) {
  widthIndex = index;
  widthValue = value;

  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  while (tableHeader.firstChild) {
    tableHeader.removeChild(tableHeader.firstChild);
  }

  tableSection(data);
}

function createTableHeader(item, index, data) {
  const { name, value } = item;

  const headerItem = createTag("div", "table__headerItem");

  const headerName = createTag("p", "table__headerName", name);

  const valueData = value[widthIndex] || value[0];
  widthValue = valueData;
  const headerValue = createTag("p", "table__headerValue", valueData);

  if (value.length > 1 && index === 1) {
    // логика для смены толщины
    headerValue.classList.add("table__headerValue--hover");
    const headerValueList = createTag("div", "table__headerValueList");
    const headerValueIcon =
      '<svg width="19" height="11" viewBox="0 0 19 11" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 9.17939e-07L0.406732 10.5L18.5933 10.5L9.5 9.17939e-07Z"/></svg>';
    const headerValueIconContainer = createTag(
      "div",
      "table__headerValueIconContainer",
      headerValueIcon
    );
    value.forEach((item, index) => {
      if (item === widthValue) return null;
      const headerValueExtra = createTag(
        "p",
        "table__headerValueListItem",
        item
      );
      headerValueList.appendChild(headerValueExtra);

      headerValue.onclick = () =>
        (isExtraValuesOpened = collapseContent(
          headerValueList,
          isExtraValuesOpened,
          0
        ));

      headerValueExtra.onclick = () => changeTable(item, index, data);
    });

    headerValue.appendChild(headerValueIconContainer);
    headerValue.appendChild(headerValueList);
  }

  headerItem.appendChild(headerName);
  headerItem.appendChild(headerValue);

  tableHeader.appendChild(headerItem);
}

function createTableBody(item) {
  const { name, value, tooltip } = item;

  const bodyItem = createTag("div", "table__bodyItem");

  const bodyName = createTag("p", "table__bodyName", name);

  if (tooltip) {
    // добавить логику подсказки
  }

  const valueData = value[widthIndex] || value[0];
  const bodyValue = createTag("p", "table__bodyValue", valueData);

  bodyItem.appendChild(bodyName);
  bodyItem.appendChild(bodyValue);

  tableBody.appendChild(bodyItem);
}

function tableSection(data) {
  const { table } = data;
  const { headerContent, bodyContent } = separateData(table);

  if (headerContent.length) {
    headerContent.forEach((item, index) =>
      createTableHeader(item, index, data)
    );
  }

  if (bodyContent.length) {
    bodyContent.forEach((item) => createTableBody(item));
  }

  tableHandler.onclick = () => {
    isTableCollapsed = collapseContent(
      tableContainer,
      isTableCollapsed,
      350,
      mainTable
    );
    tableButtonText.innerHTML = isTableCollapsed
      ? "скрыть"
      : "развернуть характеристики";
    tableButtonIcon.classList.toggle("table__more-icon--active");
  };

  if (tableSectionHandlerButton) {
    tableSectionHandlerButton.onclick = () => {
      isTableSectionActive = sectionHandler(
        isTableSectionActive,
        mainTable,
        0,
        tableSectionHandlerButtonIcon,
        "table__handler-icon--active",
        true
      );
    };
  }
}

export default tableSection;
