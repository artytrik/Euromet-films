$(document).ready(function() {
  $("#about-call-tel").mask("+7 (999) 999-9999");
});

const video = document.querySelector(`.about__video`);
const videoWrapper = document.querySelector(`.about__video`);
const playButton = document.querySelector(`.about__play-video`);
const playButtonWrapper = document.querySelector(`.about__play-video-wrapper`);
const aboutInput = document.querySelectorAll('.about-contact__input');

const playVideo = () => {
  videoWrapper.classList.remove(`about__video--hide`);
  playButtonWrapper.classList.add(`about__play-video-wrapper--hide`);
  video.src += "1";
};

playButton.addEventListener(`click`, playVideo);

$("#about-form").submit(function (e) {
  e.preventDefault();
   var form_data = $(this).serialize();
   $.ajax({
       type: "POST", // Метод отправки
       url: "send.php", // Путь до php файла отправителя
       data: form_data,
       dataType: 'json', // what type of data do we expect back from the server
       encode: true
   })
   .done(function(data) {
    aboutInput.forEach((input) => input.value = "");
   });
});
