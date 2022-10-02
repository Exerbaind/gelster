let form = null;

const formHandler = document.querySelectorAll(
  ".orderForm__containerHeaderHandler"
);
let formName;
let formPhone;
let formCity;
let formArea;
let formArticleNumber;
let formService;
let validForm = false; 

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

  formName = document.querySelector(`.${form.className} input[name='name']`);
  formPhone = document.querySelector(
    `.${form.className} input[name='telephone']`
  );
  formCity = document.querySelector(`.${form.className} input[name='city']`);
  formArea = document.querySelector(`.${form.className} input[name='area']`);
  formArticleNumber = document.querySelector(
    `.${form.className} input[name='articleNumber']`
  );
  formService = document.querySelector(
    `.${form.className} input[name='service']`
  );

  formName.value = userData.name;
  formPhone.value = userData.telephone;
  formCity.value = userData.city;

  if (type === "formArticle") {
    userData.article = number || '';
    formArea.value = userData.area;
    formArticleNumber.value = number ? number : userData.article;
  }

  if (type === "formService") {
    formArea.value = userData.service;
  }

  formName.onchange = (event) => changeUserData(event, type);
  formPhone.onchange = (event) => changeUserData(event, type);
  formCity.onchange = (event) => changeUserData(event, type);
  formArea.onchange = (event) => changeUserData(event, type);
  formService.onchange = (event) => changeUserData(event, type);

  form.classList.add("orderForm--active");
}

export function closeForm() {
  form.classList.remove("orderForm--active");
}

function changeUserData(event, type) {
  const {
    target: { name, value },
  } = event;

  userData[name] = value;

  if (type === "formArticle") {
    validForm = Object.keys(userData).filter(item => item !== 'service').every((item) => userData[item].length);
  }

  if (type === "formService") {
    validForm = Object.keys(userData).filter(item => item !== 'area' || item !== 'article').every((item) => userData[item].length);
  }

  if (validForm) {
    formSubmit.removeAttribute('disabled', true);
    formSubmit.onclick = () => closeForm();
  } else {
    formSubmit.setAttribute('disabled', false);
  }
}

function main() {
  formHandler.forEach((item) => (item.onclick = () => closeForm()));
}

main();
