const express = require('express');
const router = express.Router();
const Peques = require('../models/peques');


router.get('/', async (req, res) => {
    try {
        const arrayPequesDB = Peques;
        console.log(arrayPequesDB);
        res.json(arrayPequesDB)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;