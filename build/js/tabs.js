"use strict";

var tabLinks = document.querySelectorAll(".technologies__link-list-text");
var tabBlocks = document.querySelectorAll(".technologies__inner-wrapper");

var onTabClick = function onTabClick(tab, i) {
  tab.addEventListener('click', function (evt) {
    evt.preventDefault();
    tabBlocks.forEach(function (block) {
      return block.classList.add("technologies__inner-wrapper--hide");
    });
    tabLinks.forEach(function (link) {
      return link.classList.remove("technologies__link-list-text--active");
    });
    tabBlocks[i].classList.remove("technologies__inner-wrapper--hide");
    tabLinks[i].classList.add("technologies__link-list-text--active");
  });
};

tabLinks.forEach(function (tab, i) {
  return onTabClick(tab, i);
});