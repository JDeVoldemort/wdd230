const requestURL = 'https://jdevoldemort.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.spotlight');
cards.innerHTML ='';

let counter = 0;
function displayBusiness(bus) {
    // Create elements to add to the document
    // cards.innerHTML = '';

    let card = document.createElement('div');
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
    image.setAttribute('class',`spotlight${counter}`);
    image.setAttribute('loading',`lazy`);
    
    // append items to card
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(phone);
    // card.appendChild(email);
    card.appendChild(web);
    // card.appendChild(memberS);
    card.setAttribute('class', `spotlight${counter}`)
    document.querySelector('section.spotlight').appendChild(card);
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
    length = businesses.length;
    shuffleBusinesses = businesses.sort(() => .5 - Math.random());
    shuffleBusinesses.forEach(filterList);
}
getPatrons(requestURL);
async function filterList(shuffleBusinesses) {

    if (shuffleBusinesses.membership == 'Gold' || shuffleBusinesses.membership == 'Silver' ) {
        counter += 1;
        if (counter > 3) {
            return
        }
        else {
            displayBusiness(shuffleBusinesses);
        }
    
}
}
