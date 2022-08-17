function clearPrerender(parent) {
  const element = document.getElementById(parent);
  element.remove();
  return true;
}

export default clearPrerender;
