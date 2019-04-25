const express = require('express')

const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialController')

const router = express.Router()

module.exports = function () {
    router.get('/', homeController.home)

    router.get('/nosotros', nosotrosController.infoNosotros)

    router.get('/viajes', viajesController.viajes)

    router.get('/viajes/:id', viajesController.viaje)

    router.get('/testimoniales', testimonialesController.testimoniales)

    router.post('/testimoniales', testimonialesController.insertTestimonial)

    return router
}