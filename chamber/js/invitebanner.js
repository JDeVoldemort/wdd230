const current = new Date();
const inviteBanner = document.querySelector('.invitebanner');
  if (current.getDay() == 2 || current.getDay() == 1){
    inviteBanner.style.display = "block";
    inviteBanner.style.padding = "1em";
    inviteBanner.style.margin = "0em";

  } else {
    inviteBanner.style.display = "none";
  };