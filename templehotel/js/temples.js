const requestURL = 'https://jdevoldemort.github.io/wdd230/templehotel/json/data.json';
const cards = document.querySelector('.cards');
// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");

function displayBusiness(bus) {
    // Create elements to add to the document
    // cards.innerHTML = '';
    let card = document.createElement('section');
    let name = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let web = document.createElement('p');
    let memberS = document.createElement('p');
    let image = document.createElement('img');
    
    name.innerHTML = `${bus.name}`;
    phone.innerHTML = `${bus.phone}`;
    email.innerHTML = `${bus.email}`;
    web.innerHTML = `${bus.website}`;
    image.innerHTML = `${bus.image}`;
    memberS.innerHTML =`${bus.membership}`;


    image.setAttribute('src',`${bus.image}`);
    image.setAttribute('alt',`The logo of ${bus.name}`);
    image.setAttribute('class',`busimg`);
    image.setAttribute('width',`100px`);
    // image.setAttribute('height',`auto`);
    image.setAttribute('loading',`lazy`);

    // append items to card
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(web);
    card.appendChild(memberS);

    document.querySelector('div.cards').appendChild(card);
}

async function getPatrons(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();
        makeList(data);
    }
}

async function makeList(data) {
    businesses = data['businesses'];

    businesses.forEach(displayBusiness);
}

getPatrons(requestURL);

const busimg = document.querySelectorAll('cards.section.img.busimg');

// gridbutton.addEventListener("click", () => {
// 	cards.classList.add("grid");
// 	cards.classList.remove("list");
// 	document.querySelectorAll('.busimg').forEach((el)=> {
//         el.classList.remove("hidden");})
    
// });
// listbutton.addEventListener("click", () => {
// 	cards.classList.add("list");
// 	cards.classList.remove("grid");
//     document.querySelectorAll('.busimg').forEach((el)=> {
//         el.classList.add("hidden");})
// });