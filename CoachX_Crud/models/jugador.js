const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jugadorSchema = new Schema({
    nombre: String,
    apellidos: String,
    dorsal: Number,
    fecha_nacimiento: Date,
    posicion: String,
    estado_fisico: String,
    equipo: String
})


const Jugador = mongoose.model('jugador', jugadorSchema, "Proyectocoachx");

module.exports = Jugador;