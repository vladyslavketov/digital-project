import { hideElement, showElement } from "../../common/js"; 

const burgerBtnRef = document.querySelector('.mobile-menu__btn');
const burgerMenuRef = document.querySelector('.header__nav');

updateSize();

window.addEventListener("resize", updateSize);
burgerBtnRef.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
  const expanded = burgerBtnRef.getAttribute('aria-expanded') === 'true' || false;

  if (expanded) hideElement(burgerMenuRef);
  else showElement(burgerMenuRef);

  burgerBtnRef.setAttribute('aria-expanded', !expanded);
  document.body.classList.toggle('mobileMenuIsOpen');
}
function hideBurgerMenu() {
  hideElement(burgerMenuRef);
  burgerBtnRef.setAttribute('aria-expanded', false);
  document.body.classList.remove('mobileMenuIsOpen');
}
function showBurgerMenu() {
  showElement(burgerMenuRef);
  burgerBtnRef.setAttribute('aria-expanded', true);
  document.body.classList.remove('mobileMenuIsOpen');
}

function updateSize() {
  const innerWidth = window.innerWidth;
 
  if (innerWidth < 768) hideBurgerMenu()
  else showBurgerMenu();
}
