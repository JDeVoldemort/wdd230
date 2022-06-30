const weathURL= 'https://api.openweathermap.org/data/2.5/weather?q=Seattle,US&appid=01802bebd28e3e20567f3a60722e6fc9&units=imperial'
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weathericon');
const windspv= document.querySelector('#windspv');

const windchu = document.querySelector("#windchu");

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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windspv.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const ctemp = weatherData.main.temp.toFixed(0);
    const cwindspv = weatherData.wind.speed.toFixed(0);
    if (ctemp <= 50 && cwindspv > 3) {
      let f =
        35.74 +
       (0.6215 * ctemp) -
        (35.75 * ctemp * Math.pow(cwindspv, 0.16));
      f = f.toPrecision(3);
      windchu.textContent = `${f}℉`;
    } else {
      f = "N/A";
      windchu.textContent = f;
    }
  }

  
    