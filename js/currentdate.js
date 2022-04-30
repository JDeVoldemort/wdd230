// document.getElementById('currentdate').textContent = fulldate;
try {
  const todaysdate = new Date();
  const year = todaysdate.getFullYear();
  let options = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hc: "h24",
  };
  document.querySelector("#currentyear").textContent = year;
  let lastmodif = new Date(document.lastModified).toLocaleDateString(
    "en-US",
    options
  );
  document.querySelector("#currentdate").textContent = lastmodif;
  //   document.getElementById("currentdate").textContent =
  //     new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("error Browser does not support locale");
}
