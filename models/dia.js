const mongoose = require('mongoose');
const diaModel = require('./dia');
const {Schema} = mongoose;

const DiaSchema = new Schema({
 dia: {type: String, required: true},
 ejercicios: [{ type: Schema.ObjectId , ref: 'Ejercicio' }],
 tipoDeTrabajo: {type: String, required: true}
});
module.exports = mongoose.models.dia || mongoose.model('Dia', DiaSchema);