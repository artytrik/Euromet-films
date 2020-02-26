"use strict";

var partnersSwiper;
var breakpoint = window.matchMedia('(max-width:1149px)');

var enableSwiper = function enableSwiper() {
  partnersSwiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
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