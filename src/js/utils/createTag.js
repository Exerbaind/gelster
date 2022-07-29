function createTag(tag, className = null, text = null) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }

  if (text) {
    element.innerHTML = text;
  }

  return element;
}

export default createTag;
