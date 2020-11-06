const path = require('path')
const express = require('express')

//Creation/call to the express app
const app = express()
//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../Public')
const viewsPath = path.join(__dirname, '../templates')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//Call to the index page
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Hudson Woomer'
    })
})

//Call to the about page 
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Hudson Woomer'
    })
})

//Call to the help page 
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        msg: 'This page is where we help dumb MFrs like you!'
    })
})
 
 //Weather page not called 
app.get('/weather', (req, res) => {
    res.send({
        location: Baltimore,
        forecast: 'you are leaving early today!',
    })
})
//----REQUIRED PAGES-----
// app.com
// app.com/help 
// app.com/about
// app.com/weather
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})