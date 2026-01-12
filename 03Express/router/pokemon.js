const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon');

router.get('/', async (req, res) => {
    try {
        const arrayPokemonDB = await Pokemon.find();
        console.log("arrayPokemonDB:", JSON.stringify(arrayPokemonDB, null, 2));

        // ⚠️ Cambiamos a 'pokemon' en singular
        const arrayPokemon = arrayPokemonDB.flatMap(doc => doc.pokemon || []);
        console.log("Array de Pokémon a renderizar:", arrayPokemon);

        res.render("pokemon", { arrayPokemon });

    } catch (error) {
        console.error("Error al cargar los Pokémon:", error);
        res.status(500).send("Error al cargar los Pokémon");
    }
});

module.exports = router;
