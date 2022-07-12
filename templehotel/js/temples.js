const requestURL = 'https://jdevoldemort.github.io/wdd230/templehotel/json/data.json';
const cards = document.querySelector('.cards');
// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");

function displayTemples(tem) {
    // Create elements to add to the document
    // cards.innerHTML = '';
    let card = document.createElement('section');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let history = document.createElement('p');
    let ordin = document.createElement('p');
    let closures = document.createElement('ul');
    let image = document.createElement('img');
    
    name.innerHTML = `${tem.name}`;
    address.innerHTML = `${tem.address}`;
    phone.innerHTML = `${tem.phone}`;
    email.innerHTML = `${tem.email}`;
    services.innerHTML = `${tem.services}`;

    history.innerHTML = `${tem.history}`;
    ordin.innerHTML = `${tem.ordinances}`;
    clss = tem['closures'];
    // clss.forEach(breaklist1)
    // function breaklist1(clss) {
    //     year = clss['2022'];
    //     year2 = clss['2023'];
    //     console.table(year);
    //     console.table(year1);
    //     // year.foreach(breaklist2);

    // }
    // function breaklist2(yearlist) {

    //     closures.appendChild
    //     console.table(yearlist);
    //     yearlist.forEach 

    // }
    // yearA = clss.2022;
    // console.table(yearA);
    // console.table(clss);

    closures.innerHTML = `${tem.closures}`;

    image.innerHTML = `${tem.image}`;


    image.setAttribute('src',`${tem.image}`);
    image.setAttribute('alt',`The logo of ${tem.name}`);
    image.setAttribute('class',`temimg`);
    image.setAttribute('width',`300px`);
    // image.setAttribute('height',`auto`);
    image.setAttribute('loading',`lazy`);

    // append items to card
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordin);
    card.appendChild(closures);

    document.querySelector('div.cards').appendChild(card);
}

async function getPatrons(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();
        console.table(data);
        makeList(data);
    }
}

async function makeList(data) {
    temples = data['temples'];

    temples.forEach(displayTemples);
}


getPatrons(requestURL);

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