const mongoose = require('mongoose');
const dietaModel = require('./dieta');
const {Schema} = mongoose;

const DietaSchema =new Schema({
    dietaPorDias: [{type: Schema.ObjectId , ref: 'DietaEstablecida'}],
    nombreDeDieta: {type: String, require: true},
    objetivoDieta: {type: String, require: true}
});
module.exports = mongoose.models.dieta || mongoose.model('Dieta', DietaSchema);