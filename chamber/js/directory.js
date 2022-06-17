const requestURL = 'https://jdevoldemort.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

function displayBusiness(bus) {
    // Create elements to add to the document
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
    if (Response.ok) {
        const data = await response.json();
        makeList(data);
    }
}

async function makeList(data) {
    businesses = data['businesses'];
    console.table(businesses);

    businesses.forEach(displayBusiness);
}

getPatrons(requestURL);