"use strict";

var contactButtons = document.querySelectorAll(".contacts__button");
var modalCall = document.querySelector(".modal-call");
var overlay = document.querySelector(".modal-overlay");
var closeButton = modalCall.querySelector(".modal-call__cross");

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

contactButtons.forEach(function (button) {
  button.addEventListener("click", onContactButtonClick);
});
closeButton.addEventListener("click", onCloseButtonClick);
overlay.addEventListener("click", onCloseButtonClick);