function toggleMenu() {
  document.querySelector("#menubtn").classList.toggle("open");
  document.querySelector("#navigate").classList.toggle("open");
}
// const y = document.querySelector('#menubtn')

document.querySelector("#menubtn").addEventListener("click", toggleMenu);
