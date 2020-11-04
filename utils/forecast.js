
const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c39ceffe6be9b65a901364cbe6d84925&query='+latitude+','+longitude+'&units=f'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to connect to weather service!', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions.toString() + ', It is currently ' + response.body.current.temperature.toString() + ' degrees out. It feels like ' + response.body.current.feelslike.toString() + ' degrees out.')
        }
    })
}

module.exports = forecast