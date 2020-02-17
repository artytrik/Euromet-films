"use strict";

var video = document.querySelector(".intro__video");
var videoWrapper = document.querySelector(".intro__video-wrapper");
var videoOverlay = document.querySelector("#video-overlay");
var playButton = document.querySelector(".intro__play-video");
var videoCross = document.querySelector(".intro__video-cross");

var playVideo = function playVideo() {
  videoWrapper.classList.remove("intro__video-wrapper--hide");
  videoOverlay.classList.add("modal-overlay--show");
  playButton.classList.add("intro__play-video--hide");
  video.src += "1";
};

var stopVideo = function stopVideo() {
  videoWrapper.classList.add("intro__video-wrapper--hide");
  videoOverlay.classList.remove("modal-overlay--show");
  playButton.classList.remove("intro__play-video--hide");
  video.src = video.src.slice(0, -1);
};

playButton.addEventListener("click", playVideo);
videoCross.addEventListener("click", stopVideo);
videoOverlay.addEventListener("click", stopVideo);