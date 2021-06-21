const mongoose = require('mongoose');
const dietaEstablecidaModel = require('./dietaEstablecida');
const {Schema} = mongoose;

const DietaEstablecidaSchema = new Schema({
 dia: {type: String, required: true},
 proteinas: {type: Number, required: true},
 calorias: {type: Number, required: true}
});
module.exports = mongoose.models.dietaEstablecida || mongoose.model('DietaEstablecida', DietaEstablecidaSchema);