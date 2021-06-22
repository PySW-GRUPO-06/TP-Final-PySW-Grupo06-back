const RegistroDieta = require('../models/registroDieta');

const registroDietaCtrl = {}

registroDietaCtrl.getAllRegistroDieta = async (req, res) => {
    var registroDieta = await RegistroDieta.find();
    res.json(registroDieta);
}

registroDietaCtrl.createRegistroDieta = async (req, res) => {
    var registroDieta = new RegistroDieta(req.body);
    try {
        await registroDieta.save();
        res.json({
            'status': '1',
            'msg': 'registroDieta guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

registroDietaCtrl.getRegistroDieta = async (req, res) => {
    const registroDieta = await RegistroDieta.findById(req.params.id).exec();
    /* console.log(registroDieta)*/
    res.json(registroDieta);
}


registroDietaCtrl.editRegistroDieta = async (req, res) => {
    const vregistroDieta = new RegistroDieta(req.body);
    try {
        await RegistroDieta.updateOne({ _id: req.body._id }, vregistroDieta);
        res.json({
            'status': '1',
            'msg': 'registroDieta updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
registroDietaCtrl.deleteRegistroDieta = async (req, res) => {
    try {
        await RegistroDieta.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'registroDieta removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = registroDietaCtrl;