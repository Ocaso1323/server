const express = require("express")
const bodyParser = require("body-parser")
const { API_VERSION } = require("./constants")
const cors = require ('cors')
const authRouter = require("./router/auth.router")
const app = express()

//impotar rutas


//configurar body parse
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//configurar carpeta Estaticas
app.use(express.static("uploads"))

//configurar heard - http - cord
app.use(cors())
//configurar rutas endpoints

//confugurar rutas
app.use(`/api/${API_VERSION}`, authRouter)

module.exports = app