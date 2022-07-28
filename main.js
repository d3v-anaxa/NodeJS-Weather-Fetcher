const request = require('request');
const dotenv = require('dotenv').config().parsed?.APIKEY;
const argument = process.argv[2];

const options = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${dotenv}`,
    method: "GET",
    json: true,
};
request(options, (error, res, body) => {
    if (argument === undefined){
        console.log(body.message);
    } else {
        console.log(`${argument} is currently facing ${body.main.temp}° C temperature with ${body.weather[0].description}`);
    }
});