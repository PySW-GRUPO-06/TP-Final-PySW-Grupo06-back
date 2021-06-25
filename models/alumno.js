const mongoose = require('mongoose');
const alumnoModel = require('./alumno');
const {Schema} = mongoose;


const AlumnoSchema = new Schema({
 persona: { type: Schema.ObjectId, ref: 'Persona' },
 fechaInicio: {type: String, required: true},
 registroPlan: [{ type: Schema.ObjectId, ref: 'Plan' }],
 planActivo: { type: Schema.ObjectId, ref: 'Plan' },
 asistencia: [{ type: Schema.ObjectId, ref: 'Asistencia' }]
});
module.exports = mongoose.models.alumno || mongoose.model('Alumno', AlumnoSchema);