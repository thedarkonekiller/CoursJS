fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/soissons?unitGroup=metric&key=V8XA2MTZRZE7Y897T5RAWKMB6&contentType=json', {
        "method": "GET",
        "headers": {
        }
        })
      .then(response => {
        return response.json()
      })
      .then(data => {
          console.log(data)
      })
      .catch(err => {
        console.error(err);
      });