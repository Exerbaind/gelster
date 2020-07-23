// function preferencesTransorm() {
//     if (fullPage < 900) {
//     for (i = 0; i < preferencesSlider.length; i++) {
//         preferencesSlider[i].classList.add('slide');
//     }
//     }
// }


// window.onload = function () {
let fullPage = document.documentElement.clientWidth;
let preferencesSlider = document.querySelectorAll('.preferences__col');
let hideVideo = document.querySelector('.opening-video');
if (fullPage > 500) {
    new fullpage('#fullpage', {
        verticalCentered: false,
        anchors: ['page1', 'page2'],
    })
} else {
    hideVideo.innerHTML = '';
    hideVideo.remove();
    for (i = 0; i < preferencesSlider.length; i++) {
        preferencesSlider[i].classList.add('slide');
    }
    new fullpage('#fullpage', {
        anchors: ['page1', 'page2'],
        verticalCentered: false,
        scrollOverflow: true,
        resize: false,
        // autoScrolling: false,
        // fitToSection: false,
    });
}
// }