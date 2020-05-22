"use strict";

$(document).ready(function () {
  $("#call-tel").mask("+7 (999) 999-9999");
});
var pageHeader = document.querySelector(".page-header");
var toggle = pageHeader.querySelector(".page-header__toggle");

var onToggleClick = function onToggleClick(evt) {
  evt.preventDefault();
  pageHeader.classList.toggle("page-header--opened");
};

toggle.addEventListener("click", onToggleClick);