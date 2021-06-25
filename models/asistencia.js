const mongoose = require('mongoose');
const asistenciaModel = require('./asistencia');
const {Schema} = mongoose;


const AsistenciaSchema = new Schema({
 dia: {type: String, required: true},
 tipoAsistencia: {type: String, required: true}
});
module.exports = mongoose.models.asistencia || mongoose.model('Asistencia', AsistenciaSchema);