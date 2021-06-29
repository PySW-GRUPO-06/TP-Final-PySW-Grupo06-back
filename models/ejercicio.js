const mongoose = require('mongoose');
const ejercicioModel = require('./ejercicio');
const {Schema} = mongoose;


const EjercicioSchema = new Schema({
 nombre: {type: String, required: true},
 series: {type: Number, required: true},
 repeticiones: {type: Number, required: true},
 descansoEntreSeries: {type: Number, required: true},
 img: {type: String, required: true},
 peso: {type: Number, required: true}
});
module.exports = mongoose.models.ejercicio || mongoose.model('Ejercicio', EjercicioSchema);