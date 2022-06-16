const form = document.querySelector('.form');
const input = document.querySelector('.bust');
const output = document.querySelector('.output');


const re = /^[\w- ]{7,}$/;

function testInfo(busInput) {
    let ok = re.exec(busInput.value);
  
    if (!ok) {
      output.textContent = `${busInput.value} Invalid Business Name`;
    } else {
      output.textContent = `Thanks, Excellent business name!${ok[0]}`;
      ok = true;
        return ok;
       
    }
}
form.addEventListener('submit', (event) => {
    if (testInfo(input) == true) {
        return
    }else {
        event.preventDefault();
        testInfo(input);
    }

  });