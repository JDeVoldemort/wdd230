const requestURL =
  "https://jdevoldemort.github.io/wdd230/templehotel/json/data.json";
const cards = document.querySelector(".cards");
let counter = 0;
let counterA = 0;
const buttons = [];
// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");

function displayTemples(tem) {
  // Create elements to add to the document
  // cards.innerHTML = '';
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

  name.innerHTML = `${tem.name}`;
  address.innerHTML = `${tem.address}`;
  phone.innerHTML = `${tem.phone}`;
  email.innerHTML = `${tem.email}`;
  services.innerHTML = `Services: ${tem.services}`;
  hist = tem["history"];
  hist.forEach(function (val) {
    let close = document.createElement("li");
    // console.log(close);

    close.innerHTML = val;
    history.appendChild(close);
  });
//   history.innerHTML = `${tem.history}`;
  ordin.innerHTML = `Ordinances: ${tem.ordinances}`;
  clss = tem["closures"];
  clss.forEach(function (val) {
    let close = document.createElement("li");
    // console.log(close);

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
  // image.setAttribute('height',`auto`);
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
//   likeBtn.classList.add(`curve`);
  likeBtn.setAttribute("width", `100%`);

  // append items to card
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

  document.querySelector("div.cards").appendChild(card);
}
const likeBtnListen = async () => {
// const likeBtns = document.querySelectorAll('div.likebtn');
    
    //  console.log(likeBtns);

     buttons.forEach(likeBtn => {
        //  window.localStorage.setItem(`${event.like}`, 'nolike');
    //  counter += 1;
        let btn = document.querySelector(`.${likeBtn}`);
        // let button = `button${counter}`;
        // buttons.push(button);
        // console.table(buttons);
        // window.localStorage.setItem(`button${counter}`, '0');
         console.log(window.localStorage);
         btn.addEventListener("click", (event)=> {
             event.target.classList.toggle("nolike");
             event.target.classList.toggle("ylike");
            //  if (event.target.classList.contains("ylike")) {
                 if ((window.localStorage.getItem(`${likeBtn}`))=='0') {
                     window.localStorage.setItem(`${likeBtn}`,'1');
                 console.log(`Liked${likeBtn}`);

                     }
                 else {
                     window.localStorage.setItem(`${likeBtn}`, '0');
                 console.log(`${counter}, A${counterA}`);
                 }
                }

         )})
                
            
   
 }

async function getPatrons(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const data = await response.json();
    // console.table(data);
    makeList(data);
  }
}

async function makeList(data) {
  temples = data["temples"];

  temples.forEach(displayTemples);
  likeBtnListen();
}

getPatrons(requestURL);


// likeBtnListen();

// const temimg = document.querySelectorAll('cards.section.img.temimg');

// gridbutton.addEventListener("click", () => {
// 	cards.classList.add("grid");
// 	cards.classList.remove("list");
// 	document.querySelectorAll('.temimg').forEach((el)=> {
//         el.classList.remove("hidden");})

// });
// listbutton.addEventListener("click", () => {
// 	cards.classList.add("list");
// 	cards.classList.remove("grid");
//     document.querySelectorAll('.temimg').forEach((el)=> {
//         el.classList.add("hidden");})
// });
