const mongoose = require('mongoose');
const planModel = require('./plan');
const {Schema} = mongoose;


const PlanSchema = new Schema({
 tipo: {type: String, required: true},
 fechaInicioPlan: {type: Date, required: true},
 fechaFinDelPlan: {type: Date, required: true},
 nivel: {type: String, required: true},
 objetivo: {type: String, required: true},
 registroDieta: [{ type: Schema.ObjectId , ref: 'RegistroDieta'}],
 pago: [{ type: Schema.ObjectId , ref: 'Cuota' }],
 rutina: [{ type: Schema.ObjectId , ref: 'Rutina' }]
});
module.exports = mongoose.models.plan || mongoose.model('Plan', PlanSchema);