const mongoose = require('mongoose');
const rutinaModel = require('./rutina');
const {Schema} = mongoose;


const RutinaSchema = new Schema({
 nombre: {type: String, required: true},
 exigencia: {type: String, required: true},
 semanas: {type: Number, required: true},
 dias: [{ type: Schema.ObjectId , ref: 'Dia' }]
});
module.exports = mongoose.models.rutina || mongoose.model('Rutina', RutinaSchema);