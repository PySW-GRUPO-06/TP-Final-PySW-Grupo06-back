const Rutina = require('../models/rutina');

const rutinaCtrl = {}

rutinaCtrl.getAllRutina = async (req, res) => {
    var rutina = await Rutina.find().populate("ejercicios");
    res.json(rutina);
}

rutinaCtrl.createRutina = async (req, res) => {
    var rutina = new Rutina(req.body);
    try {
        await rutina.save();
        res.json({
            'status': '1',
            'msg': 'rutina guardado.',
            'id': rutina._id
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

rutinaCtrl.getRutina = async (req, res) => {
    const rutina = await Rutina.findById(req.params.id).populate('dias').exec();
    /* console.log(rutina)*/
    res.json(rutina);
}


rutinaCtrl.editRutina = async (req, res) => {
    const vrutina = new Rutina(req.body);
    try {
        await Rutina.updateOne({ _id: req.body._id }, vrutina);
        res.json({
            'status': '1',
            'msg': 'rutina updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
rutinaCtrl.deleteRutina = async (req, res) => {
    try {
        await Rutina.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'rutina removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = rutinaCtrl;