function collapseContent(element, toggler, defaultHeight, mainTable = null) {
  toggler = !toggler;

  if (toggler) {
    element.style.maxHeight = element.scrollHeight + "px";
    if (mainTable) {
      mainTable.style.maxHeight =
        element.scrollHeight + mainTable.scrollHeight + "px";
    }
  } else {
    element.style.maxHeight = defaultHeight + "px";
  }

  return toggler;
}

export default collapseContent;
