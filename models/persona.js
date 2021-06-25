const mongoose = require('mongoose');
const personaModel = require('./persona');
const {Schema} = mongoose;


const PersonaSchema = new Schema({
 usuario: { type: Schema.ObjectId , ref: 'Usuario' },
 apellido: {type: String, required: true},
 nombre: {type: String, required: true},
 dni: {type: Number, required: true},
 fechaNac: {type: String, required: true},
 celular: {type: Number, required: true},
 domicilio: {type: String, required: true},
 correo: {type: String, required: true},
 fotoPerfil: {type: String, required: true}
});
module.exports = mongoose.models.persona || mongoose.model('Persona', PersonaSchema);