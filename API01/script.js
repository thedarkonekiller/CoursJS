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


fetch('http://www.boredapi.com/api/activity/', {})
.then(response => {
  return response.json()
})
.then(data => {
  let activity = document.createElement("h2")
  let part = document.createElement("h3")
  let price = document.createElement("h3")
  activity.textContent = data.activity
  part.textContent = data.participants
  price.textContent = data.price
  document.body.append(activity, part, price)
})

fetch('https://data.drees.solidarites-sante.gouv.fr/api/explore/v2.1/catalog/datasets/500_morbidite-hospitaliere/',{})
.then(response => {
  return response.json()
})
.then(data => {
  console.log(data)
})

const btnInput = document.querySelector("#btnName")

  btnInput.addEventListener("click", (e) => {
    e.preventDefault()
    const nameValue = document.querySelector("#inputName").value
    let url = 'https://api.genderize.io?name=' + nameValue
    console.log(url)
    fetch(url, {
      'method': 'GET',
      'headers': {},
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  })
