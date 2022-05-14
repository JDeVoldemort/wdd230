// document.getElementById('currentdate').textContent = fulldate;
// try {
  const todaysdate = new Date();
  const year = todaysdate.getFullYear();
  let options = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24",
  };
  let optionsB = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  document.querySelector("#currentyear").textContent = year;
  let lastmodif = new Date(document.lastModified).toLocaleDateString(
    "en-US",
    options
  );
  document.querySelector("#currentdate").textContent = lastmodif;
  document.querySelector("#todaydate").textContent =
    new Date().toLocaleDateString("en-UK", optionsB);
// } 
// catch (e) {
//   alert("error Browser does not support locale");
// }
