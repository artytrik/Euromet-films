$(document).ready(function() {
  $("#call-tel").mask("+7 (999) 999-9999");
});

const pageHeader = document.querySelector(`.page-header`);
const toggle = pageHeader.querySelector(`.page-header__toggle`);

const onToggleClick = (evt) => {
  evt.preventDefault();

  pageHeader.classList.toggle(`page-header--opened`);
};

toggle.addEventListener(`click`, onToggleClick);
