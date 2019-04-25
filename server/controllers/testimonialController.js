const Testimonial = require('../models/Testimoniales')

exports.testimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}

exports.insertTestimonial = (req, res) => {
    // Validar campos
    let {
        nombre,
        correo,
        mensaje
    } = req.body

    let errores = []
    if (!nombre) {
        errores.push({
            'mensaje': 'Agrega un Nombre'
        })
    }

    if (!correo) {
        errores.push({
            'mensaje': 'Agrega un Correo'
        })
    }

    if (!mensaje) {
        errores.push({
            'mensaje': 'Agrega un Mensaje'
        })
    }

    if (errores.length > 0) {
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            .then(test => res.redirect('/testimoniales'))
            .catch(err => console.log(err))
    }
}