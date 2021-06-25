const mongoose = require('mongoose');
const planModel = require('./plan');
const {Schema} = mongoose;


const PlanSchema = new Schema({
 tipo: {type: String, required: true},
 fechaInicioPlan: {type: String, required: true},
 fechaFinDelPlan: {type: String, required: true},
 nivel: {type: String, required: true},
 objetivo: {type: String, required: true},
 registroDieta: [{ type: Schema.ObjectId , ref: 'RegistroDieta'}],
 dieta: {type: Schema.ObjectId , ref: 'Dieta'},
 pago: [{ type: Schema.ObjectId , ref: 'Cuota' }],
 rutina: [{ type: Schema.ObjectId , ref: 'Rutina' }]
});
module.exports = mongoose.models.plan || mongoose.model('Plan', PlanSchema);