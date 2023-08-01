export function setChecked(el) {
  el.setAttribute('aria-checked', 'true');
  el.setAttribute('checked', '');
}

export function setUnChecked(el) {
  el.setAttribute('aria-checked', 'false');
  el.removeAttribute('checked');
}
