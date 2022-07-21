const requestURL =
  "https://jdevoldemort.github.io/wdd230/templehotel/json/data.json";
const cards = document.querySelector(".cards");
let counter = 0;
let counterA = 0;
const buttons = [];

function displayTemples(tem) {
  let card = document.createElement("section");
  let name = document.createElement("p");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let email = document.createElement("p");
  let services = document.createElement("p");
  let history = document.createElement("ul");
  let ordin = document.createElement("p");
  let closures = document.createElement("ul");
  let image = document.createElement("img");
  let likeBtn = document.createElement("div")

  name.classList.add('onefont5');
  name.innerHTML = `${tem.name}`;
  address.innerHTML = `${tem.address}`;
  phone.innerHTML = `${tem.phone}`;
  email.innerHTML = `${tem.email}`;
  services.innerHTML = `Services: ${tem.services}`;
  hist = tem["history"];
  hist.forEach(function (val) {
    let close = document.createElement("li");

    close.innerHTML = val;
    history.appendChild(close);
  });
  ordin.innerHTML = `Ordinances: ${tem.ordinances}`;
  clss = tem["closures"];
  clss.forEach(function (val) {
    let close = document.createElement("li");

    close.innerHTML = val;
    closures.appendChild(close);
  });

  counterA+=1;
  image.innerHTML = `${tem.image}`;
  console.log(`unLiked${counter}, ${counterA}`);

  image.setAttribute("src", `${tem.image}`);
  image.setAttribute("alt", `The logo of ${tem.name}`);
  image.setAttribute("class", `temimg`);
  image.setAttribute("width", `300px`);
  image.setAttribute("loading", `lazy`);
  if (typeof (window.localStorage.getItem(`button${counterA}`)) == 'undefined') {
    window.localStorage.setItem(`button${counterA}`, '0');

  }else {
  if ((window.localStorage.getItem(`button${counterA}`))=='0') {
    likeBtn.classList.add('nolike');
  }else {
    likeBtn.classList.add('ylike');
  }
  }

  likeBtn.classList.add('likebtn', 'hover', 'empad5',`button${counterA}`);
  buttons.push(`button${counterA}`);
  likeBtn.setAttribute("width", `100%`);

  card.appendChild(likeBtn);
  card.appendChild(name);
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(services);
  card.appendChild(history);
  card.appendChild(ordin);
  card.appendChild(closures);
  card.classList.add('empad');

  document.querySelector("div.cards").appendChild(card);
}
const likeBtnListen = async () => {
    

     buttons.forEach(likeBtn => {
        let btn = document.querySelector(`.${likeBtn}`);
         console.log(window.localStorage);
         btn.addEventListener("click", (event)=> {
             event.target.classList.toggle("nolike");
             event.target.classList.toggle("ylike");
                 if ((window.localStorage.getItem(`${likeBtn}`))=='0') {
                     window.localStorage.setItem(`${likeBtn}`,'1');

                     }
                 else {
                     window.localStorage.setItem(`${likeBtn}`, '0');
                 }
                }

         )})
                
            
   
 }

async function getPatrons(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const data = await response.json();
    makeList(data);
  }
}

async function makeList(data) {
  temples = data["temples"];

  temples.forEach(displayTemples);
  likeBtnListen();
}

getPatrons(requestURL);
