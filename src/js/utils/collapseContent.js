function collapseContent(element, toggler, defaultHeight) {
  toggler = !toggler;

  if (toggler) {
    element.style.maxHeight = element.scrollHeight + "px";
  } else {
    element.style.maxHeight = defaultHeight + "px";
  }

  return toggler;
}

export default collapseContent;

// TODO: Добить добавление классов, изменение текста и прочие фишки/анимации
