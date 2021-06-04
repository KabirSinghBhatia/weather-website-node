const weatherForm = document.querySelector("#weatherForm");
const search = document.querySelector("#address");
const weatherCard = document.querySelector("#weather-card");
const weatherLocation = document.querySelector("#weather-location");
const weatherDataEl = document.querySelector("#weather-data");
const addressQuery = document.querySelector("#address-query");
const errorAlert = document.querySelector("#error-alert");
const errorMsg = document.querySelector("#error-msg");
const message1 = document.querySelector("#message-1");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  weatherCard.hidden = true;
  message1.textContent = "";
  message1.textContent = "Loading...";
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        errorAlert.hidden = false;
        errorMsg.textContent = data.error;
        setTimeout(() => {
          errorAlert.hidden = true;
        }, 3000);
      } else {
        errorAlert.hidden = true;
        weatherCard.hidden = false;
        weatherLocation.textContent = data.location;
        weatherDataEl.textContent = data.weatherData;
        addressQuery.textContent = "query: " + data.address;
        // console.log(data.forecast);
        // console.log(data.location);
        // console.log(data.address);
      }
      message1.textContent = "";
    });
  });
});
