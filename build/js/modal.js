const contactButtons = document.querySelectorAll(`.contacts__button`)
const modalCall = document.querySelector(`.modal-call`);
const overlay = document.querySelector(`.modal-overlay`);
const closeButton = modalCall.querySelector(`.modal-call__cross`);

const onContactButtonClick = (evt) => {
  evt.preventDefault();

  modalCall.classList.add(`modal-call--show`);
  overlay.classList.add(`modal-overlay--show`);
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();

  modalCall.classList.remove(`modal-call--show`);
  overlay.classList.remove(`modal-overlay--show`);
};

contactButtons.forEach((button) => {
  button.addEventListener(`click`, onContactButtonClick);
});

closeButton.addEventListener(`click`, onCloseButtonClick);
overlay.addEventListener(`click`, onCloseButtonClick);
