import { refs, showElement, hideElement } from '/src/common/js';

export function showLoader() {
  refs.body.classList.add('isLoading');
  showElement(refs.loader);
}

export function hideLoader() {
  refs.body.classList.remove('isLoading');
  hideElement(refs.loader);
}
