"use strict";

var contactButtons = document.querySelectorAll(".contacts__button");
var modalCall = document.querySelector(".modal-call");
var overlay = document.querySelector(".modal-overlay");
var closeButton = modalCall.querySelector(".modal-call__cross");
var modalSuccess = document.querySelector(".modal-success");

var onContactButtonClick = function onContactButtonClick(evt) {
  evt.preventDefault();
  modalCall.classList.add("modal-call--show");
  overlay.classList.add("modal-overlay--show");
};

var onCloseButtonClick = function onCloseButtonClick(evt) {
  evt.preventDefault();
  modalCall.classList.remove("modal-call--show");
  overlay.classList.remove("modal-overlay--show");
};

var onSendSuccess = function onSendSuccess() {
  modalCall.classList.remove('modal__opened');
  modalSuccess.classList.add('modal-success__opened');
};

contactButtons.forEach(function (button) {
  button.addEventListener("click", onContactButtonClick);
});
closeButton.addEventListener("click", onCloseButtonClick);
overlay.addEventListener("click", onCloseButtonClick);
$("#form").submit(function (e) {
  // Устанавливаем событие отправки для формы с id=form
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
    onSendSuccess();
  });
});