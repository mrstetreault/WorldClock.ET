setInterval(function () {
  //Oklahoma City
  let oklahomaCityElement = document.querySelector("#oklahoma-city");
  let oklahomaCityDateElement = oklahomaCityElement.querySelector(".date");
  let oklahomaCityTimeElement = oklahomaCityElement.querySelector(".time");

  oklahomaCityDateElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("MMMM Do YYYY");
  oklahomaCityTimeElement.innerHTML = moment()
    .tz("America/Chicago")
    .format(`h:mm:ss [<small>]A[</small>]`);

  //New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");

  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format(`h:mm:ss [<small>]A[</small>]`);

  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format(`h:mm:ss [<small>]A[</small>]`);
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#selected-city");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A",
    )}</small></div>
  </div>
  `;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
