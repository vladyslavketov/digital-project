export function hideElement(el) {
  el.classList.add('isHidden');
  el.setAttribute('aria-hidden', 'true');
}

export function showElement(el) {
  el.classList.remove('isHidden');
  el.setAttribute('aria-hidden', 'false');
}