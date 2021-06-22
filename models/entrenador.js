const mongoose = require('mongoose');
const usuarioModel = require('./entrenador');
const {Schema} = mongoose;


const EntrenadorSchema = new Schema({
 persona: { type: Schema.ObjectId , ref: 'Persona' },
 alumnosACargo: [{ type: Schema.ObjectId , ref: 'Alumno' }]
});
module.exports = mongoose.models.entrenador || mongoose.model('Entrenador', EntrenadorSchema);