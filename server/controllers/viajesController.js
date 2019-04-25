const Viaje = require('../models/Viaje')

exports.viajes = async (req, res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    })
}

exports.viaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    })
}