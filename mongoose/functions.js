import weatherSchema from "./weather-schema.js";

export async function addWeatherSchema() {
    await weatherSchema.insertMany([{
        location: "kolkata", tempC: 31, condition: { humidity: 43, isDay: 1, text: "Mist" }, feelsLikeC: 29
    },
    {
        location: "london", tempC: 4, condition: { humidity: 75, isDay: 1, text: "Overcast" }, feelsLikeC: 3
    },
    {
        location: "Ottawa", tempC: -3.4, condition: { humidity: 67, isDay: 1, text: "Light snow" }, feelsLikeC: 21
    },
    {
        location: "Mexico City", tempC: 20, condition: { humidity: 26, text: "Partly cloudy" }, feelsLikeC: 21
    },
    {
        location: "Brasilia", tempC: 19, condition: { humidity: 94, text: "Mist" }, feelsLikeC: 17
    },
    {
        location: "Paris", tempC: 1, condition: { humidity: 93, isDay: 1, text: "Overcast" }, feelsLikeC: 0
    },
    {
        location: "Chicago", tempC: 1.5, condition: { humidity: 80, text: "Light snow" }, feelsLikeC: 1
    },
    {
        location: "Bali", tempC: 27.7, condition: { humidity: 77, isDay: 1, text: "Partly cloudy" }, feelsLikeC: 26
    },
    {
        location: "Singapore", tempC: 25, condition: { humidity: 94, text: "Mist" }, feelsLikeC: 26
    },
    {
        location: "Oslo", tempC: -4, condition: { humidity: 86, isDay: 1, text: "Overcast" }, feelsLikeC: -2
    },
    {
        location: "Moscow", tempC: -1, condition: { humidity: 93, text: "Light snow" }, feelsLikeC: 1
    },
    {
        location: "Kazan", tempC: -9, condition: { humidity: 92, isDay: 1, text: "Partly cloudy" }, feelsLikeC: -8
    },
    {
        location: "Adana", tempC: 21, condition: { humidity: 35, text: "Mist" }, feelsLikeC: 20
    },
    {
        location: "Budapest", tempC: 1, condition: { humidity: 93, isDay: 1, text: "Overcast" }, feelsLikeC: 2
    },
    {
        location: "Barcelona", tempC: 4, condition: { humidity: 65, isDay: 1, text: "Light snow" }, feelsLikeC: 5
    },
    {
        location: "Manchester", tempC: 3, condition: { humidity: 75, text: "Partly cloudy" }, feelsLikeC: 4
    },
    {
        location: "Dubai", tempC: 24, condition: { humidity: 78, isDay: 1, text: "Mist" }, feelsLikeC: 25
    },
    {
        location: "Surat", tempC: 36.4, condition: { humidity: 26, text: "Overcast" }, feelsLikeC: 37
    },
    {
        location: "Panaji", tempC: 36.8, condition: { humidity: 31, text: "Light snow" }, feelsLikeC: 37
    },
    {
        location: "Doha", tempC: 22, condition: { humidity: 53, isDay: 1, text: "Mist" }, feelsLikeC: 23
    }],)
}