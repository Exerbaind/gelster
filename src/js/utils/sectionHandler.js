function sectionHandler(
  toggler,
  element,
  defaultHeight,
  handler,
  handlerClass
) {
  toggler = !toggler;

  if (toggler) {
    element.style.maxHeight = element.scrollHeight + "px";
    handler.classList.add(handlerClass);
  } else {
    element.style.maxHeight = defaultHeight + "px";
    handler.classList.remove(handlerClass);
  }

  return toggler;
}

export default sectionHandler;
