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

window.twosize = () => {
  if (window.innerWidth > 891) 
    heroImg.removeAttribute('src');
    heroImg.setAttribute('src', 'images/hero.jpg');
  
}
const inviteBanner = document.querySelector('.invitebanner');
  if (now.getDay() == 3 || now.getDay() == 2){
    inviteBanner.style.display = "block";
    inviteBanner.style.padding = "1em";
    inviteBanner.style.margin = "1em";

  } else {
    inviteBanner.style.display = 'none';
  }