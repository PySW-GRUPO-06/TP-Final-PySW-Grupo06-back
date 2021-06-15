const mongoose = require('mongoose');
const usuarioModel = require('./usuario');
const {Schema} = mongoose;


const UsuarioSchema = new Schema({
 userName: {type: String, required: true},
 password: {type: String, required: true},
 rol: {type: String, required: true},
 activo: {type: Boolean, required: true}
});
module.exports = mongoose.models.usuario || mongoose.model('Usuario', UsuarioSchema);