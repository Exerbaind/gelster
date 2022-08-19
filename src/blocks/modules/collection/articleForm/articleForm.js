const articleForm = document.querySelector(".articleForm");
const articleFormHandler = document.querySelector(
  ".articleForm__containerHeaderHandler"
);
const articleNumber = document.getElementById("articleNumber");

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
  if (number) {
    articleNumber.value = number;
  } else {
    articleNumber.value = "";
  }

  articleForm.classList.add("articleForm--active");
}

export function closeArticleForm() {
  articleForm.classList.remove("articleForm--active");
}

function main() {
  articleFormHandler.onclick = () => closeArticleForm();
}

main();
