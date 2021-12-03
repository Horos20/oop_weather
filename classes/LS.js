class LS {
    constructor() {
        this.deafultCity = "Tallinn"
        this.city
    }
    getCityData() {
        if(localStorage.getItem("city") === null) {
            this.city = this.deafultCity
        } else {
            this.city = localStorage.getItem("city")
        }
        return this.city
    }
    setCityData(city) {
        localStorage.setItem("city", city)
    }
}