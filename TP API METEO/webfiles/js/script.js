let country = document.querySelector("#country")
// const tempNow = document.querySelector("#tempNow")
// const picNow = document.querySelector("#picNow")
// const windNow = document.querySelector("#windNow")

// fetch('https://www.prevision-meteo.ch/services/json/list-cities', {
//     "method": "GET",
//     "headers": {
//     }
//     })
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//       console.log(data)
//   })
//   .catch(err => {
//     console.error(err);
//   });


country.addEventListener("input", () => {
let url = 'https://prevision-meteo.ch/services/json/'
const countryValue = country.value
if(countryValue) {
    url += countryValue
    fetch(url, {
        "method": "GET",
        "headers": {
        }
        })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        countryName.textContent = data.city_info.name
        tempNow.textContent = data.current_condition.tmp + "°C"
        conditions(data.current_condition.condition, picNow)
        windNow.textContent = data.current_condition.wnd_spd + " Km/h"
        
        nameDay1.textContent = data.fcst_day_0.day_long
        nameDay2.textContent = data.fcst_day_1.day_long
        nameDay3.textContent = data.fcst_day_2.day_long
        nameDay4.textContent = data.fcst_day_3.day_long
        nameDay5.textContent = data.fcst_day_4.day_long
        
        conditions(data.fcst_day_0.condition, picDay1)
        conditions(data.fcst_day_1.condition, picDay2)
        conditions(data.fcst_day_2.condition, picDay3)
        conditions(data.fcst_day_3.condition, picDay4)
        conditions(data.fcst_day_4.condition, picDay5)
    })
    .catch(err => {
        console.error(err);
  });
}})

function conditions(condition, pictureId) {
    switch (condition) {
      case "Ensoleillé":
          pictureId.src = "./src/images/Soleil.png"
          break;
      case "Nuit claire":
          pictureId.src = "./src/images/Nuit_dégagée.png"
          break;
      case "Ciel voilé":
          pictureId.src = "./src/images/Nuage.png"
          break;
      case "Nuit légèrement voilée":
          pictureId.src = "./src/images/Nuit_Nuageux.png"
          break;
      case "Faibles passages nuageux":
          pictureId.src = "./src/images/Nuage.png"
          break;
      case "Nuit bien dégagée":
          pictureId.src = "./src/images/Nuit_dégagée.png"
          break;
      case "Brouillard":
          pictureId.src = data.current_condition.icon
          break;
      case "Stratus":
          pictureId.src = "./src/images/Nuage.png"
          break;
      case "Stratus se dissipant":
          pictureId.src = "./src/images/Journée_Nuageux.png"
          break;
      case "Nuit claire et stratus":
          pictureId.src = "./src/images/Nuit_dégagée.png"
          break;
      case "Eclaircies":
          pictureId.src = "./src/images/Journée_Nuageux.png"
          break;
      case "Nuit nuageuse":
          pictureId.src = "./src/images/Nuit_Nuageux.png"
          break;
      case "Faiblement nuageux":
          pictureId.src = "./src/images/Soleil.png"
          break;
      case "Fortement nuageux":
          pictureId.src = "./src/images/Nuage.png"
          break;
      case "Averses de pluie faible":
          pictureId.src = "./src/images/Pluvieux.png"
          break;
      case "Nuit avec averses":
          pictureId.src = data.current_condition.icon
          break;
      case "Averses de pluie modérée":
          pictureId.src = "./src/images/Pluvieux.png"
          break;
      case "Averses de pluie forte":
          pictureId.src = "./src/images/Pluvieux.png"
          break;
      case "Couvert avec averses":
          pictureId.src = data.current_condition.icon
          break;
      case "Pluie faible":
          pictureId.src = "./src/images/Pluvieux.png"
          break;
      case "Pluie forte":
          pictureId.src = "./src/images/Pluvieux.png"
          break;
      case "Pluie modérée":
          pictureId.src = "./src/images/Pluvieux.png"
          break;
      case "Développement nuageux":
          pictureId.src = "./src/images/Soleil.png"
          break;
      case "Nuit avec développement nuageux":
          pictureId.src = "./src/images/Nuit_Nuageux.png"
          break;
      case "Faiblement orageux":
          pictureId.src = "./src/images/Orageux.svg"
          break;
      case "Nuit faiblement orageuse":
          pictureId.src = "./src/images/Orageux.svg"
          break;
      case "Orage modéré":
          pictureId.src = "./src/images/Orageux.svg"
          break;
      case "Fortement orageux":
          pictureId.src = "./src/images/Soleil.png"
          break;
      case "Averses de neige faible":
          pictureId.src = data.current_condition.icon
          break;
      case "Nuit avec averses de neige faible":
          pictureId.src = data.current_condition.icon
          break;
      case "Neige faible":
          pictureId.src = "./src/images/Soleil.png"
          break;
      case "Neige modérée":
          pictureId.src = data.current_condition.icon
          break;
      case "Neige forte":
          pictureId.src = data.current_condition.icon
          break;
      case "Pluie et neige mêlée faible":
          pictureId.src = data.current_condition.icon
          break;
      case "Pluie et neige mêlée modérée":
          pictureId.src = data.current_condition.icon
          break;
      case "Pluie et neige mêlée forte":
          pictureId.src = data.current_condition.icon
          break;
    }
}