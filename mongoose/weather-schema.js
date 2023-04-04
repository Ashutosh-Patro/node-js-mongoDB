import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    tempC: {
        type: Number,
        required: true
    },
    condition: {
        humidity: Number,
        isDay: Number,
        text: {
            type: String,
            required: true
        }
    },
    feelsLikeC: {
        type: Number,
        required: true
    }
})

export default mongoose.model("WeatherModel", weatherSchema)