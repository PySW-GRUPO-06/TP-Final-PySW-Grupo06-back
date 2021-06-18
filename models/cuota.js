const mongoose = require('mongoose');
const cuotaModel = require('./cuota');
const {Schema} = mongoose;


const CuotaSchema = new Schema({
 modoPago: {type: String, required: true},
 montoAPagar: {type: Number, required: true},
 fechaPago: {type: Date, required: true},
 mesAPagar: {type: String, required: true}
});
module.exports = mongoose.models.cuota || mongoose.model('Cuota', CuotaSchema);