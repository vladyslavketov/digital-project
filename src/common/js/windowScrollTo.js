export default function windowScrollTo(position) {
  window.scrollTo({
    top: position,
    behavior: "smooth"
  })
}