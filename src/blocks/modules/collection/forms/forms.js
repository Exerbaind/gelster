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
    formArea.value = userData.area;
    formArticleNumber.value = number ? number : userData.article;
  }

  if (type === "formService") {
    formArea.value = userData.service;
  }

  formName.onchange = (event) => changeUserData(event);
  formPhone.onchange = (event) => changeUserData(event);
  formCity.onchange = (event) => changeUserData(event);
  formArea.onchange = (event) => changeUserData(event);
  formService.onchange = (event) => changeUserData(event);

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
}

main();
