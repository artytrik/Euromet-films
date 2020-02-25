const video = document.querySelector(`.about__video`);
const videoWrapper = document.querySelector(`.about__video`);
const playButton = document.querySelector(`.about__play-video`);
const playButtonWrapper = document.querySelector(`.about__play-video-wrapper`);

const playVideo = () => {
  videoWrapper.classList.remove(`about__video--hide`);
  playButtonWrapper.classList.add(`about__play-video-wrapper--hide`);
  video.src += "1";
};

playButton.addEventListener(`click`, playVideo);
