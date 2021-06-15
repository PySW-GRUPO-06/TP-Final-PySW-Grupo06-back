const mongoose = require('mongoose');
const asistenciaModel = require('./asistencia');
const {Schema} = mongoose;


const AsistenciaSchema = new Schema({
 diaAsistido: {type: Date, required: true}
});
module.exports = mongoose.models.asistencia || mongoose.model('Asistencia', AsistenciaSchema);