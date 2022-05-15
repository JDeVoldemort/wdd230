// function toggleMenu() {
const menubtn = document.querySelector(".menubtn");
const navigate = document.querySelector(".navigate");
// }
// const y = document.querySelector('#menubtn')

menubtn.addEventListener(
  "click",
  () => {
    navigate.classList.toggle("respond");
  },
  false
);
window.onesize = () => {
  if (window.innerWidth > 891) navigate.classList.remove("respond");
};
