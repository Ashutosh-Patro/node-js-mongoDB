import mongoose from "mongoose";
import { addWeatherSchema } from './functions.js';

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://ashutosh:1234@cluster0.9cir3a3.mongodb.net/weatherApp?retryWrites=true&w=majority").then(() => {
    console.log("connected");
})

addWeatherSchema()