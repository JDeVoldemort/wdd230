const darkside = document.querySelector('.darkbtn');
const main = document.querySelector('main');

if (typeof (window.localStorage.getItem(`darkmode`)) == 'undefined') {
    window.localStorage.setItem(`darkmode`, '0');

  }else {
  if ((window.localStorage.getItem(`darkmode`))=='0') {
    main.classList.add('light');
  }else {
    main.classList.add('dark');
  }
  }

  darkside.addEventListener('click', ()=> {
    main.classList.toggle('light');
    main.classList.toggle('dark');
    if ((window.localStorage.getItem(`darkmode`))=='0') {
        window.localStorage.setItem(`darkmode`,'1');
        }
    else {
        window.localStorage.setItem(`darkmode`, '0');
    }
  })