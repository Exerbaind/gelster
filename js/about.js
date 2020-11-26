const reviewer = [...document.querySelectorAll(".reviewer")];
let currentReviewer = 0;

function nextSlide() {
  if (currentReviewer !== reviewer.length - 1) {
    for (let index = 0; index < reviewer.length; index++) {
      reviewer[index].classList.remove("show");
    }
    reviewer[currentReviewer + 1].classList.add("show");
    return currentReviewer++;
  } else {
    for (let index = 0; index < reviewer.length; index++) {
      reviewer[index].classList.remove("show");
    }
    reviewer[0].classList.add("show");
    return (currentReviewer = 0);
  }
}

function prevSlide() {
  console.log(currentReviewer);
  if (currentReviewer !== 0) {
    for (let index = 0; index < reviewer.length; index++) {
      reviewer[index].classList.remove("show");
    }
    reviewer[currentReviewer - 1].classList.add("show");
    return currentReviewer--;
  } else {
    for (let index = 0; index < reviewer.length; index++) {
      reviewer[index].classList.remove("show");
    }
    reviewer[reviewer.length - 1].classList.add("show");
    return (currentReviewer = reviewer.length - 1);
  }
}
