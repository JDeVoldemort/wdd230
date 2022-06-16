// let options = {
//     month: "2-digit",
//     day: "2-digit",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hourCycle: "h24",
//   };

let formDay = document.querySelector(".updateday");
const updateDay = new Date().toLocaleDateString("en-UK", options);
formDay.value = updateDay;