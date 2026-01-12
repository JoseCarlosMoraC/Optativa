const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", { titulo: "Bienvenido a Autoescuela Gala" })
})

router.get('/quienes-somos', (req, res) => {
    res.render("quienes-somos", { titulo: "Quiénes Somos" })
})

router.get('/autoescuelas', (req, res) => {
    const escuelas = require('../models/escuela');
    res.render("autoescuelas", { 
        arrayEscuelas: escuelas 
    })
})

router.get('/contacto', (req, res) => {
    res.render("contacto", { titulo: "Contacto" })
})
router.get('/alumnos', (req, res) => {
    const peques = require('../models/peques');
    res.render("alumnos", { 
        arrayAlumnos: peques 
    })
})

module.exports = router;