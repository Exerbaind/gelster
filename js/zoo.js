const year = [...document.querySelectorAll('.years__item')];
const page = [...document.querySelectorAll('.page')];

year.forEach((item, index) => {
    item.addEventListener('click', function () {
        const currentYear = document.querySelector('.years__item.active');
        const currentPage = document.querySelector('.page.show');
        currentYear.classList.remove('active');
        item.classList.add('active');
        currentPage.classList.remove('show');
        page[index].classList.add('show');
    })
});