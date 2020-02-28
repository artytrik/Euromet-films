const contactButtons = document.querySelectorAll(`.contacts__button`)
const modalCall = document.querySelector(`.modal-call`);
const overlay = document.querySelector(`.modal-overlay`);
const closeButton = modalCall.querySelector(`.modal-call__cross`);
const modalSuccess = document.querySelector(`.modal-success`);

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

const onSendSuccess = () => {
  modalCall.classList.remove('modal__opened');
  modalSuccess.classList.add('modal-success__opened');
};

contactButtons.forEach((button) => {
  button.addEventListener(`click`, onContactButtonClick);
});

closeButton.addEventListener(`click`, onCloseButtonClick);
overlay.addEventListener(`click`, onCloseButtonClick);

$("#form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
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
    onSendSuccess();
   });
});
