const showMobileMenu = document.querySelector('.mobile-menu_btn');
const menu = document.querySelector('.menu_m');
const itemList = document.querySelectorAll('.item-href');

// let itemLinkArray = [];

showMobileMenu.addEventListener('click', function () {
    menu.classList.toggle('menu-show');
    this.classList.toggle('mobile-menu_btn_act');
})

// function arrayAdd() {
//     for (let i = 0; i < itemList.length; i++) {
//         itemLinkArray.push(itemList[i]);
//     }
// }


var width = document.documentElement.clientWidth;
if (width > 900) {
    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page5',
            'page6', 'page7', 'page8'
        ],
    });
    // arrayAdd();
    // let px = document.documentElement.clientHeight;
    window.addEventListener('scroll', function () {
        menu.classList.add('menu-opacity');
    })
    menu.addEventListener('mouseover', function () {
        menu.classList.remove('menu-opacity');
    })
    // window.addEventListener('scroll', function () {
    //     let scrollHandler = pageYOffset;
    //     if (scrollHandler > px && scrollHandler < px * 2) {
    //         itemLinkArray[0].classList.add('item-href_active');
    //     } else {
    //         itemLinkArray[0].classList.remove('item-href_active');
    //     }
    //     if (scrollHandler > px * 2 && scrollHandler < px * 3) {
    //         itemLinkArray[1].classList.add('item-href_active');
    //     } else {
    //         itemLinkArray[1].classList.remove('item-href_active');
    //     }
    //     if (scrollHandler > px * 3 && scrollHandler < px * 4) {
    //         itemLinkArray[2].classList.add('item-href_active');
    //     } else {
    //         itemLinkArray[2].classList.remove('item-href_active');
    //     }
    //     if (scrollHandler > px * 4 && scrollHandler < px * 6) {
    //         itemLinkArray[3].classList.add('item-href_active');
    //     } else {
    //         itemLinkArray[3].classList.remove('item-href_active');
    //     }
    //     if (scrollHandler > px * 6 && scrollHandler < px * 7) {
    //         itemLinkArray[4].classList.add('item-href_active');
    //     } else {
    //         itemLinkArray[4].classList.remove('item-href_active');
    //     }
    //     if (scrollHandler > px * 7 && scrollHandler < px * 8) {
    //         itemLinkArray[5].classList.add('item-href_active');
    //     } else {
    //         itemLinkArray[5].classList.remove('item-href_active');
    //     }
    //     if (scrollHandler > px * 7.9) {
    //         itemLinkArray[6].classList.add('item-href_active');
    //         itemLinkArray[7].classList.add('item-href_active');
    //     } else {
    //         itemLinkArray[6].classList.remove('item-href_active');
    //         itemLinkArray[7].classList.remove('item-href_active');
    //     }
    // })
};