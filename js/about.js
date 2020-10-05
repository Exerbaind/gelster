const reviewer = [...document.querySelectorAll('.reviewer')];
let currentReviewer = 0;


function nextSlide() {
    if (currentReviewer !== 12) {
        for (let index = 0; index < reviewer.length; index++) {
            reviewer[index].classList.remove('show');
        }
        reviewer[currentReviewer + 1].classList.add('show');
        return currentReviewer++;
    }

}

function prevSlide() {
    // dots = [...document.querySelectorAll('.show .dots__item')];
    for (let index = 0; index < reviewer.length; index++) {
        reviewer[index].classList.remove('show');
    }
    reviewer[currentReviewer - 1].classList.add('show');
    return currentReviewer--;
}