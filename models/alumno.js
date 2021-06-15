const mongoose = require('mongoose');
const alumnoModel = require('./alumno');
const {Schema} = mongoose;


const AlumnoSchema = new Schema({
 apellido: {type: String, required: true},
 nombre: {type: String, required: true},
 dni: {type: Number, required: true},
 fechaNac: {type: Date, required: true},
 celular: {type: Number, required: true},
 domicilio: {type: String, required: true},
 correo: {type: String, required: true},
 fechaInicio: {type: Date, required: true},
 peso: {type: Number, required: true},
 altura: {type: Number, required: true},
 plan: { type: Schema.ObjectId, ref: 'Plan' },
 usuario: { type: Schema.ObjectId, ref: 'Usuario' },
 asistencia: { type: [Schema.ObjectId], ref: 'Asistencia' }
});
module.exports = mongoose.models.alumno || mongoose.model('Alumno', AlumnoSchema);