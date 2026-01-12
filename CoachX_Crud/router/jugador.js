const express = require('express');
const router = express.Router();
const Jugador = require('../models/jugador');

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayJugadorDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayJugador que tenemos EN LA VISTA
        const arrayJugadorDB = await Jugador.find();
        console.log(arrayJugadorDB);
        res.render("jugador", { 
            arrayJugador: arrayJugadorDB
        })
    } catch (error) {
        console.error(error)
    }
})

//⚠️ IMPORTANTE: Esta ruta DEBE ir ANTES de '/:id'
//Aqui empieza el metodo para crear
router.get('/crear', (req, res) =>{
    res.render('crear') //Nueva vista que debemos crear
})

router.post('/', async (req, res) => {
    const body = req.body //Gracias al body parser, de esta forma
    //podremos recuperar todo lo que viene del body
    console.log(body) //Para comprobarlo por pantalla
    try {
        const jugadorDB = new Jugador(body) //Creamos un nuevo Jugador, gracias al modelo
        await jugadorDB.save() //Lo guardamos con .save(), gracias a Mongoose
        res.redirect('/jugador') //Volvemos al listado
    } catch (error) {
        console.log('error', error)
    }
})

//Aqui empieza el metodo para mostrar detalles por id
//⚠️ Esta ruta DEBE ir DESPUÉS de '/crear'
router.get('/:id', async(req, res) => { //El id vendrá por el GET (barra de direcciones)
    const id = req.params.id //Recordemos que en la plantilla "jugador.ejs" le pusimos
    //a este campo jugador.id, por eso lo llamados con params.id
    try {
        const jugadorDB = await Jugador.findOne({ _id: id }) //_id porque así lo indica Mongo
        //Esta variable "Jugador" está definida arriba con el "require"
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(jugadorDB) //Para probarlo por consola
        res.render('detalle', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            jugador: jugadorDB,
            error: false
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('detalle', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Jugador no encontrado!'
        })
    }
})

//Aqui empieza el metodo para borrar
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
      
        const jugadorDB = await Jugador.findByIdAndDelete({ _id: id });
        console.log(jugadorDB)

        if (!jugadorDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el Jugador.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Jugador eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;