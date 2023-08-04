const country = document.querySelector("#country")
const temp = document.querySelector("#temp")
const temp1 = document.querySelector("#temp1")
const temp2 = document.querySelector("#temp2")

fetch("https://prevision-meteo.ch/services/json/bastia", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  return response.json()
})
.then(data => {
    console.log(data)
    country.textContent = data.city_info.name
    temp.textContent = data.forecast[0][0].temp2m
    temp1.textContent = data.forecast[0][1].temp2m
    temp2.textContent = data.forecast[0][2].temp2m
})
.catch(err => {
  console.error(err);
});
