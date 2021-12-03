// Weather object
const weather = new Weather("Tallinn")

// UI object
const ui = new UI();

//Get city weather
function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}

getWeather()