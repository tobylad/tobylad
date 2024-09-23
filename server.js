const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'build')))

const openWeatherApiKey = process.env.OPEN_WEATHER_API_KEY

console.log(openWeatherApiKey, 'Sledgehammer')

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
