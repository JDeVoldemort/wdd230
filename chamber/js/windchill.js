const temper = parseInt(document.querySelector("#temperature").innerHTML);
const windspu = parseFloat(document.querySelector("#windspu").innerHTML);
const windchu = document.querySelector("#windchu");
console.log(temper);
console.log(windspu);
console.log(windchu);
if (temper <= 50 && windspu > 3) {
  let f =
    35.74 +
   (0.6215 * temper) -
    (35.75 * Math.pow(windspu, 0.16)) +
    (0.4275 * temper * Math.pow(windspu, 0.16));
  console.log(f);
  f = f.toPrecision(3);
  console.log(f);
  windchu.textContent = `${f}℉`;
} else {
  f = "N/A";
  windchu.textContent = f;
}
