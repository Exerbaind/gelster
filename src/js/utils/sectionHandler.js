function sectionHandler(
  toggler,
  element,
  defaultHeight,
  arrowElement,
  arrowClass
) {
  toggler = !toggler;

  if (toggler) {
    element.style.maxHeight = element.scrollHeight + "px";
    arrowElement.classList.add(arrowClass);
  } else {
    element.style.maxHeight = defaultHeight + "px";
    arrowElement.classList.remove(arrowClass);
  }

  return toggler;
}

export default sectionHandler;
