"use strict";

var _swiper = _interopRequireDefault(require("swiper"));

require("../../node_modules/swiper/css/swiper.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var partnersSwiper;
var principlesSwiper = new _swiper["default"](".principles-slider", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
    }
  },
  loop: true
});
var breakpoint = window.matchMedia('(max-width:1149px)');

var enableSwiper = function enableSwiper() {
  partnersSwiper = new _swiper["default"](".partners__swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });
};

var breakpointChecker = function breakpointChecker() {
  if (breakpoint.matches === true) {
    if (partnersSwiper !== undefined) partnersSwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();