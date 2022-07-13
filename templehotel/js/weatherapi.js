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
const alert = document.querySelector('.weatheralert');

const weatherIcon = document.querySelector('#weathericon');
const windspv= document.querySelector('#windspv');

const windchu = document.querySelector("#windchu");

async function apiFetch() {
    try {
      const response = await fetch(weathURL);
      if (response.ok) {
        const data = await response.json();
        console.table(data);

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
    currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;

//   Still need to Change days on forcast using todays date
    temphA.innerHTML = `<strong>${weatherData.daily[0].temp.max.toFixed(0)}</strong>`;
    temphB.innerHTML = `<strong>${weatherData.daily[0].temp.max.toFixed(0)}</strong>`;
    temphC.innerHTML = `<strong>${weatherData.daily[0].temp.max.toFixed(0)}</strong>`;
    tempL1.innerHTML = `<strong>${weatherData.daily[0].temp.min.toFixed(0)}</strong>`;
    tempL2.innerHTML = `<strong>${weatherData.daily[0].temp.min.toFixed(0)}</strong>`;
    tempL3.innerHTML = `<strong>${weatherData.daily[0].temp.min.toFixed(0)}</strong>`;
    humid1.innerHTML = `<strong>${weatherData.daily[0].humidity.toFixed(0)}</strong>`;
    humid2.innerHTML = `<strong>${weatherData.daily[0].humidity.toFixed(0)}</strong>`;
    humid3.innerHTML = `<strong>${weatherData.daily[0].humidity.toFixed(0)}</strong>`;

    const iconsrc = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
    const desc = weatherData.current.weather[0].description;
    const iconsrc1 = `https://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`;
    const iconsrc2 = `https://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`;
    const iconsrc3 = `https://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`;

    const desc1 = weatherData.daily[0].weather[0].description;
    const desc2 = weatherData.daily[0].weather[0].description;
    const desc3 = weatherData.daily[0].weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    icon1.setAttribute('src', iconsrc1);
    icon2.setAttribute('src', iconsrc2);
    icon3.setAttribute('src', iconsrc3);
    weatherIcon.setAttribute('alt', desc);
    icon1.setAttribute('alt', desc1);
    icon2.setAttribute('alt', desc2);
    icon3.setAttribute('alt', desc3);
  }