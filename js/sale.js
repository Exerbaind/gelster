$(document).ready(function () {
    $(".fourth-block").height($(".fourth-block__content_act").height());
    $(".fourth-block").width($(".fourth-block__content_act").width());

    var doMenu = document.documentElement.clientWidth;
    if (doMenu < 500) {
        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 850) {
                $('.mobile-categories').fadeIn();
                $('.instruction-block_act').fadeIn();
            } else {
                $('.mobile-categories').fadeOut();
                $('.instruction-block_act').fadeOut();
            }
        });
    }
});


const materialBlocks = document.querySelectorAll('.fourth-block__content');
let currentMaterialBlock;

const menuBlocks = document.querySelectorAll('.th-content__item');
let activeMenuBlock;

const categoryItems = document.querySelectorAll('.cat__item');
let currentCategoryItem;

const saleMessageBlock = document.querySelector('.instruction-block');

// const instruction = document.querySelector('.instruction');

for (let i = 0; i < menuBlocks.length; i++) {
    menuBlocks[i].addEventListener('click', function () {
        currentMaterialBlock = document.querySelector('.fourth-block__content.fourth-block__content_hide');
        activeMenuBlock = document.querySelector('.th-content__item.content__item_act');
        activeMenuBlock.classList.remove('content__item_act');
        menuBlocks[i].classList.add('content__item_act');
        currentMaterialBlock.classList.remove('fourth-block__content_hide');
        materialBlocks[i].classList.add('fourth-block__content_hide');
        currentMaterialBlock = materialBlocks[i];
        currentCategoryItem = document.querySelector('.cat__item.cat__item_act');
        currentCategoryItem.classList.remove('cat__item_act');
        categoryItems[i].classList.add('cat__item_act');
        if (i == 1 || i == 5) {
            saleMessageBlock.classList.add('instruction-block_act');
        } else {
            saleMessageBlock.classList.remove('instruction-block_act');
        }
    })
}


for (let i = 0; i < categoryItems.length; i++) {
    categoryItems[i].addEventListener('click', function () {
        currentCategoryItem = document.querySelector('.cat__item.cat__item_act');
        currentCategoryItem.classList.remove('cat__item_act');
        categoryItems[i].classList.add('cat__item_act');
        currentMaterialBlock = document.querySelector('.fourth-block__content.fourth-block__content_hide');
        currentMaterialBlock.classList.remove('fourth-block__content_hide');
        materialBlocks[i].classList.add('fourth-block__content_hide');
        activeMenuBlock = document.querySelector('.th-content__item.content__item_act');
        activeMenuBlock.classList.remove('content__item_act');
        menuBlocks[i].classList.add('content__item_act');
        if (i == 1 || i == 5) {
            saleMessageBlock.classList.add('instruction-block_act');
        } else {
            saleMessageBlock.classList.remove('instruction-block_act');
        }
    })
}


// цена в евро на товары 

let smaragd = 7.2,
    spectra = 6.7,
    standart = 7.2,
    apex = 16,
    basis = 14.6,
    spaceOne = 14.6,
    layout = 17.8,
    mix = 17.8,
    brush = 42,
    classic = 43,
    duo = 46,
    akzent = 10,
    sport6_0 = 12,
    sport4_3 = 11;

let euroValue = document.querySelector('.euro-value').innerHTML;



const priceSmaragd = document.querySelectorAll('.price-now .smaragd'),
    priceSpectra = document.querySelectorAll('.price-now .spectra'),
    priceStandart = document.querySelectorAll('.price-now .standart'),
    priceApex = document.querySelectorAll('.price-now .apex'),
    priceBasis = document.querySelectorAll('.price-now .basis'),
    priceSpaceOne = document.querySelectorAll('.price-now .space-one'),
    priceLayout = document.querySelectorAll('.price-now .layout'),
    priceMix = document.querySelectorAll('.price-now .mix'),
    priceBrush = document.querySelectorAll('.price-now .brush'),
    priceClassic = document.querySelectorAll('.price-now .classic'),
    priceDuo = document.querySelectorAll('.price-now .duo'),
    priceAkzent = document.querySelectorAll('.price-now .akzent'),
    priceSportClassic = document.querySelectorAll('.price-now .sport6-0'),
    priceSportStandart = document.querySelectorAll('.price-now .sport4-3');

const oldPriceSmaragd = document.querySelectorAll('.old-smaragd'),
    oldPriceSpectra = document.querySelectorAll('.old-spectra'),
    oldPriceStandart = document.querySelectorAll('.old-standart'),
    oldPriceApex = document.querySelectorAll('.old-apex'),
    oldPriceBasis = document.querySelectorAll('.old-basis'),
    oldPriceSpace = document.querySelectorAll('.old-space'),
    oldPriceLayout = document.querySelectorAll('.old-layout'),
    oldPriceMix = document.querySelectorAll('.old-mix'),
    oldPriceAkzent = document.querySelectorAll('.old-akzent'),
    oldPriceSportClassic = document.querySelectorAll('.old-sport-classic'),
    oldPriceSportStandart = document.querySelectorAll('.old-sport-standart');

const fromPriceLinolPVH = document.querySelector('.from-price_pvh'),
    fromPriceKovrPlitka = document.querySelector('.from-price_kovr-plitka'),
    fromPriceGryaz = document.querySelector('.from-price_gryaz'),
    fromPriceKovr = document.querySelector('.from-price_kovr'),
    fromPriceSport = document.querySelector('.from-price_sport');

const per50 = 50,
    per45 = 55,
    per40 = 60,
    per35 = 65,
    per30 = 70,
    per20 = 80;





// let euroValue = rates.Valute.EUR.Value;

// smaragd
let smaragdResult = smaragd * euroValue;
let oldSmaragd = (smaragdResult * 100) / per50;

for (i = 0; i < priceSmaragd.length; i++) {
    priceSmaragd[i].innerHTML = Math.ceil(smaragdResult) + ' ';
    oldPriceSmaragd[i].innerHTML = Math.ceil(oldSmaragd) + ' ';
}


//spectra
let spectraResult = spectra * euroValue;
let oldSpectra = (spectraResult * 100) / per35;

for (i = 0; i < priceSpectra.length; i++) {
    priceSpectra[i].innerHTML = Math.ceil(spectraResult) + ' ';
    oldPriceSpectra[i].innerHTML = Math.ceil(oldSpectra) + ' ';
}

// standart

let standartResult = standart * euroValue;
let oldStandart = (standartResult * 100) / per40;

for (i = 0; i < priceStandart.length; i++) {
    priceStandart[i].innerHTML = Math.ceil(standartResult) + ' ';
    oldPriceStandart[i].innerHTML = Math.ceil(oldStandart) + ' ';
}

// apex

let apexResult = apex * euroValue;
let oldApex = (apexResult * 100) / per30;

for (i = 0; i < priceApex.length; i++) {
    priceApex[i].innerHTML = Math.ceil(apexResult) + ' ';
    oldPriceApex[i].innerHTML = Math.ceil(oldApex) + ' ';
}

// basis

let basisResult = basis * euroValue;
let oldBasis = (basisResult * 100) / per30;

for (i = 0; i < priceBasis.length; i++) {
    priceBasis[i].innerHTML = Math.ceil(basisResult) + ' ';
    oldPriceBasis[i].innerHTML = Math.ceil(oldBasis) + ' ';
}

// space 1

let spaceOneResult = spaceOne * euroValue;
let oldSpace = (spaceOneResult * 100) / per30;

for (i = 0; i < priceSpaceOne.length; i++) {
    priceSpaceOne[i].innerHTML = Math.ceil(spaceOneResult) + ' ';
    oldPriceSpace[i].innerHTML = Math.ceil(oldSpace) + ' ';
}

// layout

let layoutResult = layout * euroValue;
let oldLayout = (layoutResult * 100) / per20;

for (i = 0; i < priceLayout.length; i++) {
    priceLayout[i].innerHTML = Math.ceil(layoutResult) + ' ';
    oldPriceLayout[i].innerHTML = Math.ceil(oldLayout) + ' ';
}

// mix

let mixResult = mix * euroValue;
let oldMix = (mixResult * 100) / per30;

for (i = 0; i < priceMix.length; i++) {
    priceMix[i].innerHTML = Math.ceil(mixResult) + ' ';
    oldPriceMix[i].innerHTML = Math.ceil(oldMix) + ' ';
}

// brush

let brushResult = brush * euroValue;

for (i = 0; i < priceBrush.length; i++) {
    priceBrush[i].innerHTML = Math.ceil(brushResult) + ' ';
}

// classic

let classicResult = classic * euroValue;

for (i = 0; i < priceClassic.length; i++) {
    priceClassic[i].innerHTML = Math.ceil(classicResult) + ' ';
}

// duo

let duoResult = duo * euroValue;

for (i = 0; i < priceDuo.length; i++) {
    priceDuo[i].innerHTML = Math.ceil(duoResult) + ' ';
}

// akzent

let akzentResult = akzent * euroValue;
let oldAkzent = (akzentResult * 100) / per30;

for (i = 0; i < priceAkzent.length; i++) {
    priceAkzent[i].innerHTML = Math.ceil(akzentResult) + ' ';
    oldPriceAkzent[i].innerHTML = Math.ceil(oldAkzent) + ' ';
}

// sport classic

let sportClassicResult = sport6_0 * euroValue;
let oldSportClassic = (sportClassicResult * 100) / per45;

for (i = 0; i < priceSportClassic.length; i++) {
    priceSportClassic[i].innerHTML = Math.ceil(sportClassicResult) + ' ';
    oldPriceSportClassic[i].innerHTML = Math.ceil(oldSportClassic) + ' ';
}

// sport standart

let sportStandartResult = sport4_3 * euroValue;
let oldSportStandart = (sportStandartResult * 100) / per35;

for (i = 0; i < priceSportStandart.length; i++) {
    priceSportStandart[i].innerHTML = Math.ceil(sportStandartResult) + ' ';
    oldPriceSportStandart[i].innerHTML = Math.ceil(oldSportStandart) + ' ';
}

fromPriceLinolPVH.innerHTML = Math.ceil(spectraResult);
fromPriceKovrPlitka.innerHTML = Math.ceil(basisResult);
fromPriceGryaz.innerHTML = Math.ceil(brushResult);
fromPriceKovr.innerHTML = Math.ceil(akzentResult);
fromPriceSport.innerHTML = Math.ceil(sportStandartResult);