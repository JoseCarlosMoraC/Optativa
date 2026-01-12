const express = require('express');
const router = express.Router();
const Escuela = require('../models/escuela');

router.get('/', async (req, res) => {
    try {
        const arrayEscuelaDB = Escuela;
        console.log(arrayEscuelaDB);
        res.json(arrayEscuelaDB)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;