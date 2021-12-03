class UI{
    constructor() {
        this.description = document.querySelector("#description")
        this.temp = document.querySelector("#temp")
        this.city = document.querySelector("#location")
    }
    drawWeather(data) {
        var celsius = Math.round(parseFloat(data.main.temp) - 273.15);
        var description = data.weather[0].description;

        this.description.innerHTML = description;
        this.temp.innerHTML = celsius + "&deg";
        this.city.innerHTML = data.name;
    }
}