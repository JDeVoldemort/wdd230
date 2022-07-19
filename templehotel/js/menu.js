const menubtn = document.querySelector(".menubtn");
const navigate = document.querySelector(".navigate");
const subnav = document.querySelector(".subnav");
const subnavC1 = document.querySelector(".subnav-content1");
const subnavC2 = document.querySelector(".subnav-content2");

menubtn.addEventListener(
  "click",
  () => {
    navigate.classList.toggle("respond");
  },
  false
);
subnav.addEventListener(
  "mouseover",
  (event) => {
    subnavC1.classList.toggle("none");
    subnavC2.classList.toggle("none");

    setTimeout(event => {
      subnavC1.classList.toggle("none");
    subnavC2.classList.toggle("none");

    }, 10000);
  },
  false
);
window.onesize = () => {
  if (window.innerWidth > 891) navigate.classList.remove("respond");
}