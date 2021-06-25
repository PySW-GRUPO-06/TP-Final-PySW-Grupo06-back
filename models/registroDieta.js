const mongoose = require('mongoose');
const registroDietaModel = require('./registroDieta');
const {Schema} = mongoose;


const RegistroDietaSchema = new Schema({
 foto: {type: String, required: true},
 altura: {type: Number, required: true},
 peso: {type: Number, required: true},
 fecha: {type: String, required: true},
 proteinas: {type: Number, required: true},
 calorias: {type: Number, required: true}
});
module.exports = mongoose.models.registroDieta || mongoose.model('RegistroDieta', RegistroDietaSchema);