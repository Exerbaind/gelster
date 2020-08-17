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
    if (window.location.href === 'https://gelster.ru/sale.htm#item1') {
        readURL(1)
    }
    if (window.location.href === 'https://gelster.ru/sale.htm#item2') {
        readURL(2)
    }
    if (window.location.href === 'https://gelster.ru/sale.htm#item3') {
        readURL(3)
    }
    if (window.location.href === 'https://gelster.ru/sale.htm#item4') {
        readURL(4)
    }
    if (window.location.href === 'https://gelster.ru/sale.htm#item5') {
        readURL(5)
    }
    if (window.location.href === 'https://gelster.ru/sale.htm#item6') {
        readURL(6)
    }
    if (window.location.href === 'https://gelster.ru/sale.htm#item7') {
        readURL(7)
    }
});


const materialBlocks = document.querySelectorAll('.fourth-block__content');
let currentMaterialBlock;

const menuBlocks = document.querySelectorAll('.th-content__item');
let activeMenuBlock;

const categoryItems = document.querySelectorAll('.cat__item');
let currentCategoryItem;

const saleMessageBlock = document.querySelector('.instruction-block');
const currentURL = window.location.href.split('#')[0];

for (let i = 0; i < menuBlocks.length; i++) {
    menuBlocks[i].addEventListener('click', function () {

        window.location = currentURL + `#item${i}`;

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

function readURL(n) {
    currentMaterialBlock = document.querySelector('.fourth-block__content.fourth-block__content_hide');
    activeMenuBlock = document.querySelector('.th-content__item.content__item_act');
    activeMenuBlock.classList.remove('content__item_act');
    menuBlocks[n].classList.add('content__item_act');
    currentMaterialBlock.classList.remove('fourth-block__content_hide');
    materialBlocks[n].classList.add('fourth-block__content_hide');
    currentMaterialBlock = materialBlocks[i];
    currentCategoryItem = document.querySelector('.cat__item.cat__item_act');
    currentCategoryItem.classList.remove('cat__item_act');
    categoryItems[n].classList.add('cat__item_act');
    if (n == 1 || n == 5) {
        saleMessageBlock.classList.add('instruction-block_act');
    } else {
        saleMessageBlock.classList.remove('instruction-block_act');
    }
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
    effekta = 12.5,
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
    sport4_3 = 11,
    creation30 = 15,
    creation55 = 19,
    creation70 = 19,
    creation70d = 22,
    creation70c = 33,
    esprit = 21,
    symbioz = 23,
    elegance = 18,
    impress = 16,
    impressE = 18,
    recreation30 = 15,
    TXsport = 29,
    TXevolutionUni = 26,
    TXevolutionWood = 30,
    TXtennis = 23,
    TXsurface = 18,
    saga2 = 34,
    GTIuni = 47;

// let euroValue = document.querySelector('.euro-value').innerHTML;
let euroValue = 86.9;



const priceSmaragd = document.querySelectorAll('.price-now .smaragd'),
    priceSpectra = document.querySelectorAll('.price-now .spectra'),
    priceStandart = document.querySelectorAll('.price-now .standart'),
    priceApex = document.querySelectorAll('.price-now .apex'),
    priceBasis = document.querySelectorAll('.price-now .basis'),
    priceEffekta = document.querySelectorAll('.price-now .effekta'),
    priceSpaceOne = document.querySelectorAll('.price-now .space-one'),
    priceLayout = document.querySelectorAll('.price-now .layout'),
    priceMix = document.querySelectorAll('.price-now .mix'),
    priceBrush = document.querySelectorAll('.price-now .brush'),
    priceClassic = document.querySelectorAll('.price-now .classic'),
    priceDuo = document.querySelectorAll('.price-now .duo'),
    priceAkzent = document.querySelectorAll('.price-now .akzent'),
    priceSportClassic = document.querySelectorAll('.price-now .sport6-0'),
    priceSportStandart = document.querySelectorAll('.price-now .sport4-3'),
    priceCreation30 = document.querySelectorAll('.price-now .creation30'),
    priceCreation55 = document.querySelectorAll('.price-now .creation55'),
    priceCreation70 = document.querySelectorAll('.price-now .creation70'),
    priceCreation70d = document.querySelectorAll('.price-now .creation70d'),
    priceCreation70c = document.querySelectorAll('.price-now .creation70c'),
    priceEsprit = document.querySelectorAll('.price-now .esprit'),
    priceSymbioz = document.querySelectorAll('.price-now .symbioz'),
    priceElegance = document.querySelectorAll('.price-now .elegance'),
    priceImpress = document.querySelectorAll('.price-now .impress'),
    priceImpressE = document.querySelectorAll('.price-now .impressE'),
    priceRecreation30 = document.querySelectorAll('.price-now .recreation30'),
    priceTXsport = document.querySelectorAll('.price-now .tx-sport'),
    priceTXevolutionUni = document.querySelectorAll('.price-now .tx-evolution-uni'),
    priceTXevolutionWood = document.querySelectorAll('.price-now .tx-evolution-wood'),
    priceTXtennis = document.querySelectorAll('.price-now .tx-tennis'),
    priceTXsurface = document.querySelectorAll('.price-now .tx-surface'),
    priceTXsaga = document.querySelectorAll('.price-now .saga'),
    priceTXGTIUni = document.querySelectorAll('.price-now .tx-gti-uni');

const oldPriceSmaragd = document.querySelectorAll('.old-smaragd'),
    oldPriceSpectra = document.querySelectorAll('.old-spectra'),
    oldPriceStandart = document.querySelectorAll('.old-standart'),
    oldPriceApex = document.querySelectorAll('.old-apex'),
    oldPriceBasis = document.querySelectorAll('.old-basis'),
    oldPriceEffekta = document.querySelectorAll('.old-effekta'),
    oldPriceSpace = document.querySelectorAll('.old-space'),
    oldPriceLayout = document.querySelectorAll('.old-layout'),
    oldPriceMix = document.querySelectorAll('.old-mix'),
    oldPriceAkzent = document.querySelectorAll('.old-akzent'),
    oldPriceSportClassic = document.querySelectorAll('.old-sport-classic'),
    oldPriceSportStandart = document.querySelectorAll('.old-sport-standart'),
    oldPriceCreation30 = document.querySelectorAll('.old-creation30'),
    oldPriceCreation55 = document.querySelectorAll('.old-creation55'),
    oldPriceCreation70 = document.querySelectorAll('.old-creation70'),
    oldPriceCreation70d = document.querySelectorAll('.old-creation70d'),
    oldPriceCreation70c = document.querySelectorAll('.old-creation70c'),
    oldPriceEsprit = document.querySelectorAll('.old-esprit'),
    oldPriceSymbioz = document.querySelectorAll('.old-symbioz'),
    oldPriceElegance = document.querySelectorAll('.old-elegance'),
    oldPriceImpress = document.querySelectorAll('.old-impress'),
    oldPriceImpressE = document.querySelectorAll('.old-impressE'),
    oldPriceRecreation30 = document.querySelectorAll('.old-recreation30'),
    oldPriceTXsport = document.querySelectorAll('.old-tx-sport'),
    oldPriceTXevolutionUni = document.querySelectorAll('.old-tx-evolution-uni'),
    oldPriceTXevolutionWood = document.querySelectorAll('.old-tx-evolution-wood'),
    oldPriceTXtennis = document.querySelectorAll('.old-tx-tennis'),
    oldPriceTXsurface = document.querySelectorAll('.old-tx-surface'),
    oldPriceTXsaga = document.querySelectorAll('.old-saga'),
    oldPriceTXGTIUni = document.querySelectorAll('.old-tx-gti-uni');

const fromPriceLinolPVH = document.querySelector('.from-price_pvh'),
    fromPriceKovrPlitka = document.querySelector('.from-price_kovr-plitka'),
    fromPriceGryaz = document.querySelector('.from-price_gryaz'),
    fromPriceKovr = document.querySelector('.from-price_kovr'),
    fromPriceSport = document.querySelector('.from-price_sport'),
    fromPriceVinil = document.querySelector('.from-price_pvh'),
    fromPriceVinilLam = document.querySelector('.from-price_vinil-lam');

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

// effekta

let effektaResult = effekta * euroValue;
let oldEffekta = (effektaResult * 100) / per20;

for (i = 0; i < priceEffekta.length; i++) {
    priceEffekta[i].innerHTML = Math.ceil(effektaResult) + ' ';
    oldPriceEffekta[i].innerHTML = Math.ceil(oldEffekta) + ' ';
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

// creation 30

let creation30Result = creation30 * euroValue;
let oldCreation30 = (creation30Result * 100) / per35;

for (i = 0; i < priceCreation30.length; i++) {
    priceCreation30[i].innerHTML = Math.ceil(creation30Result) + ' ';
    oldPriceCreation30[i].innerHTML = Math.ceil(oldCreation30) + ' ';
}

// creation 55

let creation55Result = creation55 * euroValue;
let oldCreation55 = (creation55Result * 100) / per35;

for (i = 0; i < priceCreation55.length; i++) {
    priceCreation55[i].innerHTML = Math.ceil(creation55Result) + ' ';
    oldPriceCreation55[i].innerHTML = Math.ceil(oldCreation55) + ' ';
}

// creation 70

let creation70Result = creation70 * euroValue;
let oldCreation70 = (creation70Result * 100) / per35;

for (i = 0; i < priceCreation70.length; i++) {
    priceCreation70[i].innerHTML = Math.ceil(creation70Result) + ' ';
    oldPriceCreation70[i].innerHTML = Math.ceil(oldCreation70) + ' ';
}

// creation 70d

let creation70dResult = creation70d * euroValue;
let oldCreation70d = (creation70dResult * 100) / per35;

for (i = 0; i < priceCreation70d.length; i++) {
    priceCreation70d[i].innerHTML = Math.ceil(creation70dResult) + ' ';
    oldPriceCreation70d[i].innerHTML = Math.ceil(oldCreation70d) + ' ';
}

// creation 70c

let creation70cResult = creation70c * euroValue;
let oldCreation70c = (creation70cResult * 100) / per35;

for (i = 0; i < priceCreation70c.length; i++) {
    priceCreation70c[i].innerHTML = Math.ceil(creation70cResult) + ' ';
    oldPriceCreation70c[i].innerHTML = Math.ceil(oldCreation70c) + ' ';
}

// esprit

let espritResult = esprit * euroValue;
let oldEsprit = (espritResult * 100) / per35;

for (i = 0; i < priceEsprit.length; i++) {
    priceEsprit[i].innerHTML = Math.ceil(espritResult) + ' ';
    oldPriceEsprit[i].innerHTML = Math.ceil(oldEsprit) + ' ';
}

// symbioz

let symbiozResult = symbioz * euroValue;
let oldSymbioz = (symbiozResult * 100) / per50;

for (i = 0; i < priceSymbioz.length; i++) {
    priceSymbioz[i].innerHTML = Math.ceil(symbiozResult) + ' ';
    oldPriceSymbioz[i].innerHTML = Math.ceil(oldSymbioz) + ' ';
}

// elegance

let eleganceResult = elegance * euroValue;
let oldElegance = (eleganceResult * 100) / per50;

for (i = 0; i < priceElegance.length; i++) {
    priceElegance[i].innerHTML = Math.ceil(eleganceResult) + ' ';
    oldPriceElegance[i].innerHTML = Math.ceil(oldElegance) + ' ';
}

// impress

let impressResult = impress * euroValue;
let oldImpress = (impressResult * 100) / per50;

for (i = 0; i < priceImpress.length; i++) {
    priceImpress[i].innerHTML = Math.ceil(impressResult) + ' ';
    oldPriceImpress[i].innerHTML = Math.ceil(oldImpress) + ' ';
}

// impressE

let impressEResult = impressE * euroValue;
let oldImpressE = (impressEResult * 100) / per50;

for (i = 0; i < priceImpressE.length; i++) {
    priceImpressE[i].innerHTML = Math.ceil(impressEResult) + ' ';
    oldPriceImpressE[i].innerHTML = Math.ceil(oldImpressE) + ' ';
}

// recreation 30

let recreation30Result = recreation30 * euroValue;
let oldRecreation30 = (recreation30Result * 100) / per50;

for (i = 0; i < priceRecreation30.length; i++) {
    priceRecreation30[i].innerHTML = Math.ceil(recreation30Result) + ' ';
    oldPriceRecreation30[i].innerHTML = Math.ceil(oldRecreation30) + ' ';
}

// TX Sport

let TXsportResult = TXsport * euroValue;
let oldTXsport = (TXsportResult * 100) / per50;

for (i = 0; i < priceTXsport.length; i++) {
    priceTXsport[i].innerHTML = Math.ceil(TXsportResult) + ' ';
    oldPriceTXsport[i].innerHTML = Math.ceil(oldTXsport) + ' ';
}

// evolution uni

let TXevolutionUniResult = TXevolutionUni * euroValue;
let oldTXevolutionUni = (TXevolutionUniResult * 100) / per45;

for (i = 0; i < priceTXevolutionUni.length; i++) {
    priceTXevolutionUni[i].innerHTML = Math.ceil(TXevolutionUniResult) + ' ';
    oldPriceTXevolutionUni[i].innerHTML = Math.ceil(oldTXevolutionUni) + ' ';
}

// evolution wood

let TXevolutionWoodResult = TXevolutionWood * euroValue;
let oldTXevolutionWood = (TXevolutionWoodResult * 100) / per45;

for (i = 0; i < priceTXevolutionWood.length; i++) {
    priceTXevolutionWood[i].innerHTML = Math.ceil(TXevolutionWoodResult) + ' ';
    oldPriceTXevolutionWood[i].innerHTML = Math.ceil(oldTXevolutionWood) + ' ';
}

// tennis

let TXtennisResult = TXtennis * euroValue;
let oldTXtennis = (TXtennisResult * 100) / per50;

for (i = 0; i < priceTXtennis.length; i++) {
    priceTXtennis[i].innerHTML = Math.ceil(TXtennisResult) + ' ';
    oldPriceTXtennis[i].innerHTML = Math.ceil(oldTXtennis) + ' ';
}

// surface

let TXsurfaceResult = TXsurface * euroValue;
let oldTXsurface = (TXsurfaceResult * 100) / per30;

for (i = 0; i < oldPriceTXsurface.length; i++) {
    priceTXsurface[i].innerHTML = Math.ceil(TXsurfaceResult) + ' ';
    oldPriceTXsurface[i].innerHTML = Math.ceil(oldTXsurface) + ' ';
}

// saga 2

let saga2Result = saga2 * euroValue;
let oldSaga2 = (saga2Result * 100) / per30;

for (i = 0; i < oldPriceTXsaga.length; i++) {
    priceTXsaga[i].innerHTML = Math.ceil(saga2Result) + ' ';
    oldPriceTXsaga[i].innerHTML = Math.ceil(oldSaga2) + ' ';
}

// GTI

let GTIuniResult = GTIuni * euroValue;
let oldGTIuni = (GTIuniResult * 100) / per40;

for (i = 0; i < oldPriceTXGTIUni.length; i++) {
    priceTXGTIUni[i].innerHTML = Math.ceil(GTIuniResult) + ' ';
    oldPriceTXGTIUni[i].innerHTML = Math.ceil(oldGTIuni) + ' ';
}

fromPriceLinolPVH.innerHTML = Math.ceil(spectraResult);
fromPriceKovrPlitka.innerHTML = Math.ceil(basisResult);
fromPriceGryaz.innerHTML = Math.ceil(brushResult);
fromPriceKovr.innerHTML = Math.ceil(akzentResult);
fromPriceSport.innerHTML = Math.ceil(sportStandartResult);
fromPriceVinil.innerHTML = Math.ceil(effektaResult);
fromPriceVinilLam.innerHTML = Math.ceil(creation30Result);