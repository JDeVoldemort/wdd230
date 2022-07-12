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
    var history = document.createElement('ul');
    let ordin = document.createElement('p');
    var closures = document.createElement('ul');
    let image = document.createElement('img');
    
    name.innerHTML = `${tem.name}`;
    address.innerHTML = `${tem.address}`;
    phone.innerHTML = `${tem.phone}`;
    email.innerHTML = `${tem.email}`;
    services.innerHTML = `${tem.services}`;
    hist = tem['history'];
    hist.forEach(function(val){
        let close = document.createElement('li');
    // console.log(close);

        close.innerHTML = val;
    history.appendChild(close);

    });
    history.innerHTML = `${tem.history}`;
    ordin.innerHTML = `${tem.ordinances}`;
    clss = tem['closures'];
    year1 = clss['2022'];
    // console.table(year1);
    year1.forEach(function(val){
        let close = document.createElement('li');
    // console.log(close);

        close.innerHTML = val;
    closures.appendChild(close);

    });
    year2 = clss['2023'];

    year2.forEach(function(val){
        let close = document.createElement('li');
    // console.log(close);

        close.innerHTML = val;
    closures.appendChild(close);

    });
    let close = document.createElement('li');
    // let close2 = document.createElement('li');
    // close.innerHTML = `${clss.year1}`;
    // close2.innerHTML = `${clss.year2}`;
    // closures.appendChild(close2);

   // scrap lists in json when you come back in the morning and just submit services as a paragraph do the same with the closure dates. # ask what am missing in the layered lists. 
    // console.table(clss);

    // closures.innerHTML = `${tem.closures}`;

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