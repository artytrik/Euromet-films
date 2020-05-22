"use strict";

$(document).ready(function () {
  $("#about-call-tel").mask("+7 (999) 999-9999");
});
var video = document.querySelector(".about__video");
var videoWrapper = document.querySelector(".about__video");
var playButton = document.querySelector(".about__play-video");
var playButtonWrapper = document.querySelector(".about__play-video-wrapper");
var aboutInput = document.querySelectorAll('.about-contact__input');

var playVideo = function playVideo() {
  videoWrapper.classList.remove("about__video--hide");
  playButtonWrapper.classList.add("about__play-video-wrapper--hide");
  video.src += "1";
};

playButton.addEventListener("click", playVideo);
$("#about-form").submit(function (e) {
  e.preventDefault();
  var form_data = $(this).serialize();
  $.ajax({
    type: "POST",
    // Метод отправки
    url: "send.php",
    // Путь до php файла отправителя
    data: form_data,
    dataType: 'json',
    // what type of data do we expect back from the server
    encode: true
  }).done(function (data) {
    aboutInput.forEach(function (input) {
      return input.value = "";
    });
  });
});