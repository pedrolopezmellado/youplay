const port = 3000
const { response } = require('express');
const express = require('express')
var cors = require('cors')
const app = express()

require('express-validator')

app.use(cors())

// Conexión con rutas
const rutas = require('./routes/rutas.js')
app.use('/youplay', rutas)

var server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = server