const Ejercicio = require('../models/ejercicio');

const ejercicioCtrl = {}

ejercicioCtrl.getAllEjercicio = async (req, res) => {
    var ejercicio = await Ejercicio.find();
    res.json(ejercicio);
}

ejercicioCtrl.createEjercicio = async (req, res) => {
    var ejercicio = new Ejercicio(req.body);
    try {
        await ejercicio.save();
        res.json({
            'status': '1',
            'msg': 'ejercicio guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

ejercicioCtrl.getEjercicio = async (req, res) => {
    const ejercicio = await Ejercicio.findById(req.params.id).exec();
    /* console.log(ejercicio)*/
    res.json(ejercicio);
}


ejercicioCtrl.editEjercicio = async (req, res) => {
    const vejercicio = new Ejercicio(req.body);
    try {
        await Ejercicio.updateOne({ _id: req.body._id }, vejercicio);
        res.json({
            'status': '1',
            'msg': 'ejercicio updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
ejercicioCtrl.deleteEjercicio = async (req, res) => {
    try {
        await Ejercicio.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'ejercicio removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = ejercicioCtrl;