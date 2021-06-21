const mongoose = require('mongoose');
const planModel = require('./dieta');
const {Schema} = mongoose;

const DietaShema =new Schema({
    dietaPorDias: [{type: Schema.ObjectId , ref: 'DietaEstablecida'}],
    nombreDeDieta: {type: String, require: true},
    objetivoDieta: {type: String, require: true}
});
module.exports = mongoose.models.dieta || mongoose.model('Dieta', DietaSchema);