var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var stancel, safin, bolshakova;

function onYouTubeIframeAPIReady() {
  stancel = new YT.Player("stancel", {
    videoId: "sZfF3SVDi58",
  });
  safin = new YT.Player("safin", {
    videoId: "4vhyWmcEYTE",
  });
  bolshakova = new YT.Player("bolshakova", {
    videoId: "d3pMpmhe_Hg",
  });
}

function stopVideo() {
  stancel.stopVideo();
  safin.stopVideo();
  bolshakova.stopVideo();
}

const blockToSwitch = [...document.querySelectorAll(".section__person-block")];
const personsList = [...document.querySelectorAll(".people__item")];
const prevPerson = document.querySelector(".section__arrow.prev");
const nextPerson = document.querySelector(".section__arrow.next");
let currentPerson = 0;

for (let index = 0; index < personsList.length; index++) {
  personsList[index].addEventListener("click", () => {
    stopVideo();
    hideAll();
    blockToSwitch[index].classList.add("section__person-block--active");
    personsList[index].classList.add("people__item--active");
    currentPerson = index;
  });
}

function hideAll() {
  for (let index = 0; index < blockToSwitch.length; index++) {
    blockToSwitch[index].classList.remove("section__person-block--active");
  }
  for (let index = 0; index < blockToSwitch.length; index++) {
    personsList[index].classList.remove("people__item--active");
  }
}

function slideToNextPerson() {
  stopVideo();
  hideAll();
  if (currentPerson < blockToSwitch.length - 1) {
    currentPerson++;
    blockToSwitch[currentPerson].classList.add("section__person-block--active");
    personsList[currentPerson].classList.add("people__item--active");
    return currentPerson;
  } else {
    currentPerson = 0;
    blockToSwitch[currentPerson].classList.add("section__person-block--active");
    personsList[currentPerson].classList.add("people__item--active");
    return currentPerson;
  }
}

function slideToPrevPerson() {
  stopVideo();
  hideAll();
  if (currentPerson === 0) {
    currentPerson = blockToSwitch.length - 1;
    blockToSwitch[currentPerson].classList.add("section__person-block--active");
    personsList[currentPerson].classList.add("people__item--active");
    return currentPerson;
  } else {
    currentPerson--;
    blockToSwitch[currentPerson].classList.add("section__person-block--active");
    personsList[currentPerson].classList.add("people__item--active");
    return currentPerson;
  }
}

prevPerson.onclick = () => {
  slideToPrevPerson();
};

nextPerson.onclick = () => {
  slideToNextPerson();
};
