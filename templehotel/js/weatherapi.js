const weathURL= 'https://api.openweathermap.org/data/2.5/onecall?lat=38.983120&lon=-77.095413&appid=01802bebd28e3e20567f3a60722e6fc9&units=imperial'

const currentTemp = document.querySelector('#temp');
const temphA = document.querySelector('.temph1');
const temphB = document.querySelector('.temph2');
const temphC = document.querySelector('.temph3');
const tempL1 = document.querySelector('.templ1');
const tempL2 = document.querySelector('.templ2');
const tempL3 = document.querySelector('.templ3');
const humid1 = document.querySelector('.humid1');
const humid2 = document.querySelector('.humid2');
const humid3 = document.querySelector('.humid3');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const icon3 = document.querySelector('.icon3');
const skies = document.querySelector('.skies');
const humid = document.querySelector('#humid');
const alert = document.querySelector('.weatheralert');
const alertban = document.querySelector('.weatheralertban');
const closeBtn = document.querySelector('.closebtn');
const wday1 = document.querySelector('.wday1');
const wday2 = document.querySelector('.wday2');
const wday3 = document.querySelector('.wday3');
const weatherIcon = document.querySelector('#weathericon');
let days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};
async function apiFetch() {
    try {
      const response = await fetch(weathURL);
      if (response.ok) {
        const data = await response.json();

        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
  function displayResults(weatherData) {
    if (typeof weatherData.alerts != 'undefined') {
      alertban.classList.toggle('none');

      alert.innerHTML = `<strong>${weatherData.alerts[0].event}: </strong> ${weatherData.alerts[0].description}
      `;
      closeBtn.addEventListener('click', ()=> {
        alertban.classList.toggle('none');
      })
    }
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
    const desc = weatherData.current.weather[0].description;
    const iconsrc1 = `https://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}@2x.png`;
    const iconsrc2 = `https://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}@2x.png`;
    const iconsrc3 = `https://openweathermap.org/img/wn/${weatherData.daily[3].weather[0].icon}@2x.png`;

    const day1 = new Date(weatherData.daily[1].dt *1000).getDay();
    wday1.innerHTML = days[day1];
    const day2 = new Date(weatherData.daily[2].dt *1000).getDay();
    wday2.innerHTML = days[day2];
    const day3 = new Date(weatherData.daily[3].dt *1000).getDay();
    wday3.innerHTML = days[day3];
    const desc1 = weatherData.daily[1].weather[0].description;
    const desc2 = weatherData.daily[2].weather[0].description;
    const desc3 = weatherData.daily[3].weather[0].description;

    currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;
    skies.innerHTML = `<strong>${desc}</strong>`;

    humid.innerHTML = `Humidity<strong> ${weatherData.current.humidity.toFixed(0)}</strong>%`;
    


    temphA.innerHTML = `<strong>${weatherData.daily[1].temp.max.toFixed(0)}</strong>`;
    temphB.innerHTML = `<strong>${weatherData.daily[2].temp.max.toFixed(0)}</strong>`;
    temphC.innerHTML = `<strong>${weatherData.daily[3].temp.max.toFixed(0)}</strong>`;
    tempL1.innerHTML = `<strong>${weatherData.daily[1].temp.min.toFixed(0)}</strong>`;
    tempL2.innerHTML = `<strong>${weatherData.daily[2].temp.min.toFixed(0)}</strong>`;
    tempL3.innerHTML = `<strong>${weatherData.daily[3].temp.min.toFixed(0)}</strong>`;
    humid1.innerHTML = `<strong>${weatherData.daily[1].humidity.toFixed(0)}</strong>`;
    humid2.innerHTML = `<strong>${weatherData.daily[2].humidity.toFixed(0)}</strong>`;
    humid3.innerHTML = `<strong>${weatherData.daily[3].humidity.toFixed(0)}</strong>`;

    
  
    weatherIcon.setAttribute('src', iconsrc);
    icon1.setAttribute('src', iconsrc1);
    icon2.setAttribute('src', iconsrc2);
    icon3.setAttribute('src', iconsrc3);
    weatherIcon.setAttribute('alt', desc);
    icon1.setAttribute('alt', desc1);
    icon2.setAttribute('alt', desc2);
    icon3.setAttribute('alt', desc3);
  }