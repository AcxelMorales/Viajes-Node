const Viaje = require('../models/Viaje')
const Testimonial = require('../models/Testimoniales')

exports.home = async (req, res) => {
    const viajes = await Viaje.findAll({
        limit: 3
    })

    const testimoniales = await Testimonial.findAll({
        limit: 3
    })

    res.render('index', {
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    })
}