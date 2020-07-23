const arrowToTop = document.querySelector('.arrow-to-top');
let height = 0;
document.addEventListener('scroll', function () {
    height = window.pageYOffset;
    if (height > 600 && height !== 0) {
        arrowToTop.classList.add('show-arrow');
    } else {
        arrowToTop.classList.remove('show-arrow');
    }

})