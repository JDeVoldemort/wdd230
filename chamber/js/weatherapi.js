const weathURL= 'https://api.openweathermap.org/data/2.5/weather?q=Seattle,US&appid=01802bebd28e3e20567f3a60722e6fc9&units=imperial'
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weathericon');
const windspv= document.querySelector('#windspv');
// const captionDesc = document.querySelector('figcaption');
// const temper = parseInt(document.querySelector("#temp").innerHTML);
// const windspu = parseFloat(document.querySelector("#windspv").innerHTML);
const windchu = document.querySelector("#windchu");
// console.log(temper);
// console.log(windspu);
// console.log(windchu);
// if (currentTemp <= 50 && windspv > 3) {
//   let f =
//     35.74 +
//    (0.6215 * currentTemp) -
//     (35.75 * Math.pow(windspu, 0.16)) +
//     (0.4275 * currentTemp * Math.pow(windspu, 0.16));
//   console.log(f);
//   f = f.toPrecision(3);
//   console.log(f);
//   windchu.textContent = `${f}℉`;
// } else {
//   f = "N/A";
//   windchu.textContent = f;
// }
async function apiFetch() {
    try {
      const response = await fetch(weathURL);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
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
    // console.log(ctemp);
    // console.log(cwindspv);
    if (ctemp <= 50 && cwindspv > 3) {
      let f =
        35.74 +
       (0.6215 * ctemp) -
        (35.75 * ctemp * Math.pow(cwindspv, 0.16));
      // console.log(f);
      f = f.toPrecision(3);
      // console.log(f);
      windchu.textContent = `${f}℉`;
    } else {
      f = "N/A";
      windchu.textContent = f;
    }
  }

  
    