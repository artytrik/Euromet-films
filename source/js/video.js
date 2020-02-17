const video = document.querySelector(`.intro__video`);
const videoWrapper = document.querySelector(`.intro__video-wrapper`);
const videoOverlay = document.querySelector(`#video-overlay`);
const playButton = document.querySelector(`.intro__play-video`);
const videoCross = document.querySelector(`.intro__video-cross`);

const playVideo = () => {
  videoWrapper.classList.remove(`intro__video-wrapper--hide`);
  videoOverlay.classList.add(`modal-overlay--show`);
  playButton.classList.add(`intro__play-video--hide`);
  video.src += "1";
};

const stopVideo = () => {
  videoWrapper.classList.add(`intro__video-wrapper--hide`);
  videoOverlay.classList.remove(`modal-overlay--show`);
  playButton.classList.remove(`intro__play-video--hide`);
  video.src = video.src.slice(0, -1);
};

playButton.addEventListener(`click`, playVideo);
videoCross.addEventListener(`click`, stopVideo);
videoOverlay.addEventListener(`click`, stopVideo);
