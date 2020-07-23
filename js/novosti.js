const navigationItem = document.querySelectorAll('.navigation__item');
const newsPages = document.querySelectorAll('.news');

for (let index = 0; index < navigationItem.length; index++) {
    navigationItem[index].addEventListener('click', function () {
        DeleteActiveClasses(navigationItem, 'active-link');
        DeleteActiveClasses(newsPages, 'show');
        newsPages[index].classList.add('show');
        navigationItem[index].classList.add('active-link');
    });
}

// Все новости

const nextPage_all = document.querySelector('.all .item__pages_next-arrow');
const prevPage_all = document.querySelector('.all .item__pages_prev-arrow');

const numberOfPages_all = document.querySelectorAll('.all .pageNumber');
let currentPage_all = document.querySelector('.all .pageNumber.show-page');

const listOfPagesNumbers_all = document.querySelectorAll('.all .item__pages_number');
let currentListOfPagesNumbers_all = document.querySelector('.all .item__pages_number.active-page-number');

let helperIndex_all = 0;

if (numberOfPages_all.length === 1) {
    nextPage_all.classList.add('non-active');
}

for (let index = 0; index < listOfPagesNumbers_all.length; index++) {
    listOfPagesNumbers_all[index].addEventListener('click', function () {
        DeleteActiveClasses(numberOfPages_all, 'show-page');
        DeleteActiveClasses(listOfPagesNumbers_all, 'active-page-number');
        listOfPagesNumbers_all[index].classList.add('active-page-number');
        numberOfPages_all[index].classList.add('show-page');
        currentPage_all = numberOfPages_all[index];
        currentListOfPagesNumbers_all = listOfPagesNumbers_all[index];
        helperIndex_all = index;
        if (helperIndex_all === 0) {
            prevPage_all.classList.add('non-active');
        } else {
            prevPage_all.classList.remove('non-active');
        }
        if (helperIndex_all === numberOfPages_all.length - 1) {
            nextPage_all.classList.add('non-active');
        } else {
            nextPage_all.classList.remove('non-active');
        }
    });
}

function showNextPage_all() {
    helperIndex_all++;
    prevPage_all.classList.remove('non-active');
    if (helperIndex_all === numberOfPages_all.length - 1) {
        nextPage_all.classList.add('non-active');
    }
    currentPage_all.classList.remove('show-page');
    currentPage_all = numberOfPages_all[helperIndex_all];
    currentPage_all.classList.add('show-page');
    currentListOfPagesNumbers_all.classList.remove('active-page-number');
    currentListOfPagesNumbers_all = listOfPagesNumbers_all[helperIndex_all];
    currentListOfPagesNumbers_all.classList.add('active-page-number');
}

function showPrevPage_all() {
    helperIndex_all--;
    nextPage_all.classList.remove('non-active');
    if (helperIndex_all === 0) {
        prevPage_all.classList.add('non-active');
    }
    currentPage_all.classList.remove('show-page');
    currentPage_all = numberOfPages_all[helperIndex_all];
    currentPage_all.classList.add('show-page');
    currentListOfPagesNumbers_all.classList.remove('active-page-number');
    currentListOfPagesNumbers_all = listOfPagesNumbers_all[helperIndex_all];
    currentListOfPagesNumbers_all.classList.add('active-page-number');
}

// Новые коллекции

const nextPage_new = document.querySelector('.new .item__pages_next-arrow');
const prevPage_new = document.querySelector('.new .item__pages_prev-arrow');

const numberOfPages_new = document.querySelectorAll('.new .pageNumber');
let currentPage_new = document.querySelector('.new .pageNumber.show-page');

const listOfPagesNumbers_new = document.querySelectorAll('.new .item__pages_number');
let currentListOfPagesNumbers_new = document.querySelector('.new .item__pages_number.active-page-number');

let helperIndex_new = 0;

// if (numberOfPages_new.length === 1) {
//     nextPage_new.classList.add('non-active');
// }

for (let index = 0; index < listOfPagesNumbers_new.length; index++) {
    listOfPagesNumbers_new[index].addEventListener('click', function () {
        DeleteActiveClasses(numberOfPages_new, 'show-page');
        DeleteActiveClasses(listOfPagesNumbers_new, 'active-page-number');
        listOfPagesNumbers_new[index].classList.add('active-page-number');
        numberOfPages_new[index].classList.add('show-page');
        currentPage_new = numberOfPages_new[index];
        currentListOfPagesNumbers_new = listOfPagesNumbers_new[index];
        helperIndex_new = index;
        if (helperIndex_new === 0) {
            prevPage_new.classList.add('non-active');
        } else {
            prevPage_new.classList.remove('non-active');
        }
        if (helperIndex_new === numberOfPages_new.length - 1) {
            nextPage_new.classList.add('non-active');
        } else {
            nextPage_new.classList.remove('non-active');
        }
    });
}

function showNextPage_new() {
    helperIndex_new++;
    prevPage_new.classList.remove('non-active');
    if (helperIndex_new === numberOfPages_new.length - 1) {
        nextPage_new.classList.add('non-active');
    }
    currentPage_new.classList.remove('show-page');
    currentPage_new = numberOfPages_new[helperIndex_new];
    currentPage_new.classList.add('show-page');
    currentListOfPagesNumbers_new.classList.remove('active-page-number');
    currentListOfPagesNumbers_new = listOfPagesNumbers_new[helperIndex_new];
    currentListOfPagesNumbers_new.classList.add('active-page-number');
}

function showPrevPage_new() {
    helperIndex_new--;
    nextPage_new.classList.remove('non-active');
    if (helperIndex_new === 0) {
        prevPage_new.classList.add('non-active');
    }
    currentPage_new.classList.remove('show-page');
    currentPage_new = numberOfPages_new[helperIndex_new];
    currentPage_new.classList.add('show-page');
    currentListOfPagesNumbers_new.classList.remove('active-page-number');
    currentListOfPagesNumbers_new = listOfPagesNumbers_new[helperIndex_new];
    currentListOfPagesNumbers_new.classList.add('active-page-number');
}

// Жизнь компании

const nextPage_life = document.querySelector('.life .item__pages_next-arrow');
const prevPage_life = document.querySelector('.life .item__pages_prev-arrow');

const numberOfPages_life = document.querySelectorAll('.life .pageNumber');
let currentPage_life = document.querySelector('.life .pageNumber.show-page');

const listOfPagesNumbers_life = document.querySelectorAll('.life .item__pages_number');
let currentListOfPagesNumbers_life = document.querySelector('.life .item__pages_number.active-page-number');

let helperIndex_life = 0;

// if (numberOfPages_new.length === 1) {
//     nextPage_new.classList.add('non-active');
// }

for (let index = 0; index < listOfPagesNumbers_life.length; index++) {
    listOfPagesNumbers_life[index].addEventListener('click', function () {
        DeleteActiveClasses(numberOfPages_life, 'show-page');
        DeleteActiveClasses(listOfPagesNumbers_life, 'active-page-number');
        listOfPagesNumbers_life[index].classList.add('active-page-number');
        numberOfPages_life[index].classList.add('show-page');
        currentPage_life = numberOfPages_life[index];
        currentListOfPagesNumbers_life = listOfPagesNumbers_life[index];
        helperIndex_life = index;
        if (helperIndex_life === 0) {
            prevPage_life.classList.add('non-active');
        } else {
            prevPage_life.classList.remove('non-active');
        }
        if (helperIndex_life === numberOfPages_life.length - 1) {
            nextPage_life.classList.add('non-active');
        } else {
            nextPage_life.classList.remove('non-active');
        }
    });
}

function showNextPage_life() {
    helperIndex_life++;
    prevPage_life.classList.remove('non-active');
    if (helperIndex_life === numberOfPages_life.length - 1) {
        nextPage_life.classList.add('non-active');
    }
    currentPage_life.classList.remove('show-page');
    currentPage_life = numberOfPages_life[helperIndex_life];
    currentPage_life.classList.add('show-page');
    currentListOfPagesNumbers_life.classList.remove('active-page-number');
    currentListOfPagesNumbers_life = listOfPagesNumbers_life[helperIndex_life];
    currentListOfPagesNumbers_life.classList.add('active-page-number');
}

function showPrevPage_life() {
    helperIndex_life--;
    nextPage_life.classList.remove('non-active');
    if (helperIndex_life === 0) {
        prevPage_life.classList.add('non-active');
    }
    currentPage_life.classList.remove('show-page');
    currentPage_life = numberOfPages_life[helperIndex_life];
    currentPage_life.classList.add('show-page');
    currentListOfPagesNumbers_life.classList.remove('active-page-number');
    currentListOfPagesNumbers_life = listOfPagesNumbers_life[helperIndex_life];
    currentListOfPagesNumbers_life.classList.add('active-page-number');
}

// Публикации СМИ

const nextPage_smi = document.querySelector('.smi .item__pages_next-arrow');
const prevPage_smi = document.querySelector('.smi .item__pages_prev-arrow');

const numberOfPages_smi = document.querySelectorAll('.smi .pageNumber');
let currentPage_smi = document.querySelector('.smi .pageNumber.show-page');

const listOfPagesNumbers_smi = document.querySelectorAll('.smi .item__pages_number');
let currentListOfPagesNumbers_smi = document.querySelector('.smi .item__pages_number.active-page-number');

let helperIndex_smi = 0;

// if (numberOfPages_new.length === 1) {
//     nextPage_new.classList.add('non-active');
// }

for (let index = 0; index < listOfPagesNumbers_smi.length; index++) {
    listOfPagesNumbers_smi[index].addEventListener('click', function () {
        DeleteActiveClasses(numberOfPages_smi, 'show-page');
        DeleteActiveClasses(listOfPagesNumbers_smi, 'active-page-number');
        listOfPagesNumbers_smi[index].classList.add('active-page-number');
        numberOfPages_smi[index].classList.add('show-page');
        currentPage_smi = numberOfPages_smi[index];
        currentListOfPagesNumbers_smi = listOfPagesNumbers_smi[index];
        helperIndex_smi = index;
        if (helperIndex_smi === 0) {
            prevPage_smi.classList.add('non-active');
        } else {
            prevPage_smi.classList.remove('non-active');
        }
        if (helperIndex_smi === numberOfPages_smi.length - 1) {
            nextPage_smi.classList.add('non-active');
        } else {
            nextPage_smi.classList.remove('non-active');
        }
    });
}

function showNextPage_smi() {
    helperIndex_smi++;
    prevPage_smi.classList.remove('non-active');
    if (helperIndex_smi === numberOfPages_smi.length - 1) {
        nextPage_smi.classList.add('non-active');
    }
    currentPage_smi.classList.remove('show-page');
    currentPage_smi = numberOfPages_smi[helperIndex_smi];
    currentPage_smi.classList.add('show-page');
    currentListOfPagesNumbers_smi.classList.remove('active-page-number');
    currentListOfPagesNumbers_smi = listOfPagesNumbers_smi[helperIndex_smi];
    currentListOfPagesNumbers_smi.classList.add('active-page-number');
}

function showPrevPage_smi() {
    helperIndex_smi--;
    nextPage_smi.classList.remove('non-active');
    if (helperIndex_smi === 0) {
        prevPage_smi.classList.add('non-active');
    }
    currentPage_smi.classList.remove('show-page');
    currentPage_smi = numberOfPages_smi[helperIndex_smi];
    currentPage_smi.classList.add('show-page');
    currentListOfPagesNumbers_smi.classList.remove('active-page-number');
    currentListOfPagesNumbers_smi = listOfPagesNumbers_smi[helperIndex_smi];
    currentListOfPagesNumbers_smi.classList.add('active-page-number');
}

// Отзывы

const nextPage_otziv = document.querySelector('.feedback .item__pages_next-arrow');
const prevPage_otziv = document.querySelector('.feedback .item__pages_prev-arrow');

const numberOfPages_otziv = document.querySelectorAll('.feedback .pageNumber');
let currentPage_otziv = document.querySelector('.feedback .pageNumber.show-page');

const listOfPagesNumbers_otziv = document.querySelectorAll('.feedback .item__pages_number');
let currentListOfPagesNumbers_otziv = document.querySelector('.feedback .item__pages_number.active-page-number');

let helperIndex_otziv = 0;

// if (numberOfPages_new.length === 1) {
//     nextPage_new.classList.add('non-active');
// }

for (let index = 0; index < listOfPagesNumbers_otziv.length; index++) {
    listOfPagesNumbers_otziv[index].addEventListener('click', function () {
        DeleteActiveClasses(numberOfPages_otziv, 'show-page');
        DeleteActiveClasses(listOfPagesNumbers_otziv, 'active-page-number');
        listOfPagesNumbers_otziv[index].classList.add('active-page-number');
        numberOfPages_otziv[index].classList.add('show-page');
        currentPage_otziv = numberOfPages_otziv[index];
        currentListOfPagesNumbers_otziv = listOfPagesNumbers_otziv[index];
        helperIndex_otziv = index;
        if (helperIndex_otziv === 0) {
            prevPage_otziv.classList.add('non-active');
        } else {
            prevPage_otziv.classList.remove('non-active');
        }
        if (helperIndex_otziv === numberOfPages_otziv.length - 1) {
            nextPage_otziv.classList.add('non-active');
        } else {
            nextPage_otziv.classList.remove('non-active');
        }
    });
}

function showNextPage_otziv() {
    helperIndex_otziv++;
    prevPage_otziv.classList.remove('non-active');
    if (helperIndex_otziv === numberOfPages_otziv.length - 1) {
        nextPage_otziv.classList.add('non-active');
    }
    currentPage_otziv.classList.remove('show-page');
    currentPage_otziv = numberOfPages_otziv[helperIndex_otziv];
    currentPage_otziv.classList.add('show-page');
    currentListOfPagesNumbers_otziv.classList.remove('active-page-number');
    currentListOfPagesNumbers_otziv = listOfPagesNumbers_otziv[helperIndex_otziv];
    currentListOfPagesNumbers_otziv.classList.add('active-page-number');
}

function showPrevPage_otziv() {
    helperIndex_otziv--;
    nextPage_otziv.classList.remove('non-active');
    if (helperIndex_otziv === 0) {
        prevPage_otziv.classList.add('non-active');
    }
    currentPage_otziv.classList.remove('show-page');
    currentPage_otziv = numberOfPages_otziv[helperIndex_otziv];
    currentPage_otziv.classList.add('show-page');
    currentListOfPagesNumbers_otziv.classList.remove('active-page-number');
    currentListOfPagesNumbers_otziv = listOfPagesNumbers_otziv[helperIndex_otziv];
    currentListOfPagesNumbers_otziv.classList.add('active-page-number');
}

// Общие функции

function DeleteActiveClasses(item, clas) {
    for (let index = 0; index < item.length; index++) {
        item[index].classList.remove(`${clas}`);
    }
}