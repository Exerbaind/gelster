import { openForm } from "../collection/forms/forms";

const callButton = document.querySelector(".callButton");

function main() {
  callButton.onclick = () => openForm(null, "formCall");
}

main();
