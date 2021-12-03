// Weather object
const weather = new Weather("Tallinn")

// UI object
const ui = new UI();

// Events
const form = document.querySelector("#change-city")
form.addEventListener("submit", changeCityWeather)

// Change city weather
function changeCityWeather(event) {
    const city = document.querySelector("#city-name").value
    weather.changeCity(city)
    getWeather()
    document.querySelector("#city-name").value = ""
    event.preventDefault()
}

// Get city weather
function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}

getWeather()