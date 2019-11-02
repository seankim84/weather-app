const request = require('request');


const forecast = (latitude, longitude, callback) => {
   const url = `https://api.darksky.net/forecast/432750072e7cd4e174fae944e7e96bad/${latitude},${longitude}`
   request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable open this file',undefined) 
        } else if(response.body.error){
            callback('Unhandled this error', undefined) 
        } else {    
            callback(undefined, response.body.daily.data[0].summary)
        }
   })
}

module.exports = forecast 