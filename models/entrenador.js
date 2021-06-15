const mongoose = require('mongoose');
const usuarioModel = require('./entrenador');
const {Schema} = mongoose;


const EntrenadorSchema = new Schema({
 usuario: { type: Schema.ObjectId , ref: 'Usuario' }
});
module.exports = mongoose.models.entrenador || mongoose.model('Entrenador', EntrenadorSchema);