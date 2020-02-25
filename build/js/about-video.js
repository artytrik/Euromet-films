"use strict";

var video = document.querySelector(".about__video");
var videoWrapper = document.querySelector(".about__video");
var playButton = document.querySelector(".about__play-video");
var playButtonWrapper = document.querySelector(".about__play-video-wrapper");

var playVideo = function playVideo() {
  videoWrapper.classList.remove("about__video--hide");
  playButtonWrapper.classList.add("about__play-video-wrapper--hide");
  video.src += "1";
};

playButton.addEventListener("click", playVideo);