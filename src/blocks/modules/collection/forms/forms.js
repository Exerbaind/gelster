let form = null;

const formHandler = document.querySelectorAll(
  ".orderForm__containerHeaderHandler"
);
const formName = document.getElementById("name");
const formPhone = document.getElementById("telephone");
const formCity = document.getElementById("city");
const formArea = document.getElementById("area");
const formArticleNumber = document.getElementById("articleNumber");
const formService = document.getElementById("service");

const formSubmit = document.querySelector(".orderForm__formSubmit");

const userData = {
  name: "",
  telephone: "",
  city: "",
  area: "",
  article: "",
  service: "",
};

document.addEventListener(
  "click",
  function (event) {
    if (event.target.matches(".orderForm")) {
      closeForm(form);
    }
  },
  false
);

export function openForm(number, type) {
  form = document.getElementById(type);

  formName.value = userData.name;
  formPhone.value = userData.telephone;
  formCity.value = userData.city;

  if (type === "formArticle") {
    formArea.value = userData.area;
    formArticleNumber.value = number ? number : userData.article;
  }

  if (type === "formService") {
    formArea.value = userData.service;
  }

  form.classList.add("orderForm--active");
}

export function closeForm(form) {
  form.classList.remove("orderForm--active");
}

function changeUserData(event) {
  const {
    target: { name, value },
  } = event;

  userData[name] = value;
}

function main() {
  formHandler.forEach((item) => (item.onclick = () => closeForm(form)));
  formSubmit.onclick = () => closeForm(form);

  formName.onchange = (event) => changeUserData(event);
  formPhone.onchange = (event) => changeUserData(event);
  formCity.onchange = (event) => changeUserData(event);
  formArea.onchange = (event) => changeUserData(event);
  formService.onchange = (event) => changeUserData(event);
}

main();
