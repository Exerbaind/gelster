import createTag from "../../../../js/utils/createTag";

const videoIcon =
  '<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/></svg>';

const videoContainer = document.querySelector(".videoModal");

document.addEventListener(
  "click",
  function (event) {
    if (event.target.matches(".videoModal")) {
      closeVideoModal();
    }
  },
  false
);

export function openVideoModal(video, isYouTube = false) {
  if (isYouTube) {
    videoContainer.innerHTML = video;
  } else {
    const videoFrame = createTag("video", "videoMoval__video");
    videoFrame.src = video;
    videoFrame.setAttribute("controls", true);
    videoFrame.setAttribute("muted", true);
    videoFrame.setAttribute("loop", "loop");
    videoFrame.setAttribute("preload", "metadata");
    videoFrame.setAttribute("autoplay", true);

    videoContainer.appendChild(videoFrame);
  }

  const videoContainerIcon = createTag("div", "videoModal__icon", videoIcon);
  videoContainerIcon.onclick = () => closeVideoModal();

  videoContainer.appendChild(videoContainerIcon);

  videoContainer.classList.add("videoModal--active");
}

export function closeVideoModal() {
  videoContainer.classList.remove("videoModal--active");
  while (videoContainer.firstChild) {
    videoContainer.removeChild(videoContainer.firstChild);
  }
}
