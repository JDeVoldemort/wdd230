const menubtn = document.querySelector(".menubtn");
const navigate = document.querySelector(".navigate");


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
// window.addEventListener 
const heroImg = document.querySelector('#heroimg');
