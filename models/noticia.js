const mongoose = require('mongoose');
const noticiaModel = require('./noticia');
const {Schema} = mongoose;


const noticiaSchema = new Schema({
 img: {type: String, required: true},
 titulo: {type: Number, required: true},
 texto: {type: Date, required: true}
});
module.exports = mongoose.models.noticia || mongoose.model('Noticia', noticiaSchema);