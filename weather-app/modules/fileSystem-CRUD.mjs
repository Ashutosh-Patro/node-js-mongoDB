import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let fileName = "weatherDb.txt"
let format = 'utf8'

// read function
function readFileData() {
    try {
        const arr = fs.readFileSync(path.join(__dirname, fileName), format);
        return JSON.parse(arr);;
    }
    catch (err) {
        console.log(err);
    }
}

// write function
function writeData(fileName, weatherData) {
    fs.writeFileSync(path.join(__dirname, fileName), JSON.stringify(weatherData), err => {
        if (err) {
            console.log(err);
        }
    }
    )
}

//fetch readData
export function getWeatherData(location) {
    const arr = readFileData();
    console.log(location, "func");
    let weatherData = arr.find((item) => item.location.toLowerCase() === location.toLowerCase())
    return weatherData
}

const obj = {
    location: '',
    tempC: null,
    condition: {
        humidity: null
    }
}

// create addLocation
export function addLocation(location, tempC, humidity) {
    let weatherData = readFileData(fileName, format)
    obj.location = location;
    obj.tempC = tempC;
    obj.condition.humidity = humidity;
    weatherData.push(obj)
    writeData(fileName, weatherData)
}

// delete  //location delete
export function deleteLocation(location) {
    let weatherData = readFileData(fileName, format)
    let index = weatherData.findIndex((data) => data.location.toLowerCase() === location.toLowerCase())
    if (index > -1) {
        weatherData.splice(index, 1)
    }
    else {
        console.log("location not found");
    }

    writeData(fileName, weatherData)
}

// update  //update data
export function updateData(location, tempC, humidity) {
    let weatherData = readFileData(fileName, format)
    let objmain = weatherData.find(
        (item) => item.location.toLowerCase() == location.toLowerCase()
    );
    if (
        weatherData.find((item) => item.location.toLowerCase() === location.toLowerCase())
    ) {
        objmain.location = location;
        objmain.tempC = tempC;
        objmain.condition.humidity = humidity;
    } else {
        console.log("location not found!");
    }
    writeData(fileName, weatherData)
}

//get cities
export function getData() {
    let weatherData = readFileData(fileName, format)
    const cities = [];
    for (let i = 0; i < weatherData.length; i++) {
        cities.push(weatherData[i].location)
    }
    console.log(cities);
    return cities
}

//update  //update data
export function updateDayData(location, text) {
    let weatherData = readFileData(fileName, format)
    let objmain = weatherData.find(
        (item) => item.location.toLowerCase() == location.toLowerCase()
    );
    if (objmain !== undefined) {
        objmain.condition.text = text;
    } else {
        console.log("location not found!");
    }
    writeData(fileName, weatherData)
}
