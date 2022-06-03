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
// window.addEventListener 
const heroImg = document.querySelector('#heroimg');

// window.twosize = () => {
//   if (window.innerWidth > 891) 
//     heroImg.removeAttribute('src');
//     heroImg.setAttribute('src', 'images/hero.jpg');
  
// }
const current = new Date();
const inviteBanner = document.querySelector('.invitebanner');
  if (current.getDay() == 2 || current.getDay() == 1){
    inviteBanner.style.display = "block";
    inviteBanner.style.padding = "1em";
    inviteBanner.style.margin = "0em";

  } else {
    inviteBanner.style.display = "none";
  };