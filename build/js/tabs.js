const tabLinks = document.querySelectorAll(`.technologies__link-list-text`);
const tabBlocks = document.querySelectorAll(`.technologies__inner-wrapper`);

const onTabClick = (tab, i) => {
  tab.addEventListener('click', (evt) => {
    evt.preventDefault();
    tabBlocks.forEach((block) => (block.classList.add(`technologies__inner-wrapper--hide`)));
    tabLinks.forEach((link) => (link.classList.remove(`technologies__link-list-text--active`)));
    tabBlocks[i].classList.remove(`technologies__inner-wrapper--hide`);
    tabLinks[i].classList.add(`technologies__link-list-text--active`);
  });
};

tabLinks.forEach((tab, i) => onTabClick(tab, i));
