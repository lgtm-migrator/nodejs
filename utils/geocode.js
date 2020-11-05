const request = require('postman-request')

const geocode =
    (address, callback) => {
      const url =
          'http://api.mapbox.com/geocoding/v5/mapbox.places/' +
          encodeURIComponent(address) +
          '.json?access_token=pk.eyJ1IjoiYnVmZmFsb2Jvb21lciIsImEiOiJja2Mwc2F6dzAwbWhxMnN1cmVyNDJuYW1iIn0.2nQSSXm5cawBNa6fVb7FIg'

      request({url, json : true}, (error, {body}) => {
        if (error) {
          callback('Check your network connection!', undefined)
        } else if (body.features.length === 0) {
          callback(
              'Unable to find that location! Please check the address you entered and try again...',
              undefined)
        } else {
          callback(undefined, {
            latitude : body.features[0].center[1],
            longitude : body.features[0].center[0],
            location : body.features[0].place_name
          })
        }
      })
    }

                           module.exports = geocode