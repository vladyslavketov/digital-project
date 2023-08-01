export default function setElDisabled(e, querySelector) {
  const disableEl = document.querySelector(`${querySelector}[disabled]`);
  if (disableEl) disableEl.disabled = false;
  e.target.disabled = true;
}