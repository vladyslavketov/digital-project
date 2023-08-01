import { hideLoader } from "/src/components/loader/loader"; 

window.addEventListener('load', (() => {
  window.scrollTo(0, 0);
  hideLoader();
}));

// === інший синтаксис ===
// window.onload = hideLoader();
// ===  ===

// refs.body.scrollTop();
// refs.body.scrollIntoView(true);