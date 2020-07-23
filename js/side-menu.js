let height;

let menu = document.querySelector('.active-menu');
let click = document.querySelector('.menu');

window.addEventListener('scroll', function () {
    height = pageYOffset;
    if (height > 200) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
});

function openSideMenu() {
    menu.classList.toggle('active-menu_act');
}


function MarkCurPage() {
    let cur_url = location.pathname,
        lists_1 = document.querySelector('.section-menu'),
        lists_1_a = lists_1.querySelectorAll('a'),
        lists_2 = document.querySelector('.section-menu_mobile'),
        lists_2_a = lists_2.querySelectorAll('a'),
        cur_page = [],
        check = true,
        i = 0

    cur_url = cur_url.split('desso-')[1]
    cur_url = cur_url.replace('/', '')
    cur_url = RegExp(cur_url, 'i')

    do {
        if (lists_1_a[i].href && cur_url.test(lists_1_a[i].href.replace('https://gelster.ru/', ''))) {
            check = false
        } else {
            i++
        }
    } while (check)

    cur_page.push(lists_1_a[i], lists_2_a[i])

    for (let j = 0; j < cur_page.length; j++) {
        cur_page[j].classList.add('chosen-collection')
    }
}

window.onload = () => {
    preloader.classList.add('hide-tiger')
    MarkCurPage()
}