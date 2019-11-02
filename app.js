const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast');

var address = process.argv[2];
console.log(process.argv);

if(!address) {
    console.log('Please Provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        } else {
            console.log(data)
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location);
            console.log(forecastData);
        })
    })
}

// const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2VhbmtpbSIsImEiOiJjazJnMHl6MW8wcTY0M2xvMDVlOHd3MzVsIn0.v2I7Y3x5djsMa_39oCUPJw"

// request({ url: url, json: true }, (error, response) => { // json option => parse를 해줌
//     console.log("its currently " + response.body.currently.temperature + ' degress out There is a ' + response.body.currently.precipProbability + '% chance of rain');
//     console.log (response.body.currently.summary);
// });

//Geocoding 
// Address -> lat/long -> weather

// const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2VhbmtpbSIsImEiOiJjazJnMHl6MW8wcTY0M2xvMDVlOHd3MzVsIn0.v2I7Y3x5djsMa_39oCUPJw";
// request({url: url1, json: true}, (error , response)=> {
//     console.log(error);
// });

