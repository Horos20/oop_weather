// Weather object

const weather = new Weather("Tallinn")

//Get city weather
function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
}

getWeather()