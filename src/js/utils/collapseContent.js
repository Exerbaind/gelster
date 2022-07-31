function collapseContent(element, toggler, defaultHeight) {
  toggler = !toggler;

  if (toggler) {
    element.style.maxHeight = element.scrollHeight + "px";
  } else {
    element.style.maxHeight = defaultHeight;
  }

  return toggler;
}

export default collapseContent;
