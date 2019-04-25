// Variables
const express = require('express')
const path = require('path')
const routes = require('./routes/routes')
const bp = require('body-parser')
const configs = require('./config/config')
const db = require('./config/database')

// Inicialización
const app = express()

// Configuración
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'pug') // pug

// Vistas
app.set('views', path.join(__dirname, './views'))

// Archivos estaticos
app.use(express.static('public'))

// Validamos el entorno
const config = configs[app.get('env')]

// Database [only dev]
db.authenticate()
    .then(() => console.log('DB Connectd'))
    .catch(err => {
        if (err) console.log('Error en la conexión')
    })

// Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio

// Muestra el año actual
app.use((req, res, next) => {
    const fecha = new Date().getFullYear()
    res.locals.actual = fecha
    // Página actual
    res.locals.ruta = req.path
    return next()
})

// Middleware
app.use(bp.urlencoded({
    extended: true
}))

// Rutas
app.use('/', routes())

// Iniciar server
app.listen(app.get('port'), () => {
    console.log(`Server running in the port: ${app.get('port')}`)
})