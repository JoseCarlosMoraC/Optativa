const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    pokemon: [   // ⚠️ Singular, como confirmaste
        {
            id: Number,
            nombre: String,
            tipo: String,
            descripcion: String,
            accion: String
        }
    ]
});

module.exports = mongoose.model('Pokemon', pokemonSchema, 'pokemon'); 
// ⚠️ El tercer argumento es el nombre exacto de la colección
