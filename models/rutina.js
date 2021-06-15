const mongoose = require('mongoose');
const rutinaModel = require('./rutina');
const {Schema} = mongoose;


const RutinaSchema = new Schema({
 nombre: {type: String, required: true},
 exigencia: {type: String, required: true},
 semanas: {type: Number, required: true},
 ejercicios: { type: [Schema.ObjectId] , ref: 'Ejercicio' }
});
module.exports = mongoose.models.rutina || mongoose.model('Rutina', RutinaSchema);