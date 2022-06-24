const weathURL= 'https://api.openweathermap.org/data/2.5/weather?q=Seattle,US&appid=01802bebd28e3e20567f3a60722e6fc9&units=imperial'
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weathericon');
const windspv= document.querySelector('#windspv');
// const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
    try {
      const response = await fetch(weathURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windspv.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
  }

  
    