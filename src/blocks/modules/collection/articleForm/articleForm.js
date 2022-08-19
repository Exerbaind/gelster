const articleForm = document.querySelector(".articleForm");
const articleFormHandler = document.querySelector(
  ".articleForm__containerHeaderHandler"
);
const formName = document.getElementById("name");
const formPhone = document.getElementById("telephone");
const formCity = document.getElementById("city");
const formArea = document.getElementById("area");
const formArticleNumber = document.getElementById("articleNumber");

const articleFormSubmit = document.querySelector(".articleForm__formSubmit");

const userData = {
  name: "",
  telephone: "",
  city: "",
  area: "",
  article: "",
};

document.addEventListener(
  "click",
  function (event) {
    if (event.target.matches(".articleForm")) {
      closeArticleForm();
    }
  },
  false
);

export function openArticleForm(number) {
  formName.value = userData.name;
  formPhone.value = userData.telephone;
  formCity.value = userData.city;
  formArea.value = userData.area;
  formArticleNumber.value = number ? number : userData.article;

  articleForm.classList.add("articleForm--active");
}

export function closeArticleForm() {
  articleForm.classList.remove("articleForm--active");
}

function changeUserData(event) {
  const {
    target: { name, value },
  } = event;

  userData[name] = value;
}

function main() {
  articleFormHandler.onclick = () => closeArticleForm();
  articleFormSubmit.onclick = () => closeArticleForm();

  formName.onchange = (event) => changeUserData(event);
  formPhone.onchange = (event) => changeUserData(event);
  formCity.onchange = (event) => changeUserData(event);
  formArea.onchange = (event) => changeUserData(event);
}

main();
