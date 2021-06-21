const DietaEstablecida = require('../models/dietaEstablecida');

const dietaEstablecidaCtrl = {}

dietaEstablecidaCtrl.getAllDietaEstablecia = async (req, res) => {
    var dietaEstablecida = await DietaEstablecida.find();
    res.json(dietaEstablecida);
}

dietaEstablecidaCtrl.createDietaEstablecida = async (req, res) => {
    var dietaEstablecida = new DietaEstablecida(req.body);
    try {
        await dietaEstablecida.save();
        res.json({
            'status': '1',
            'msg': 'Dieta establecida guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

dietaEstablecidaCtrl.getDietaEstablecida = async (req, res) => {
    const dietaEstablecida = await DietaEstablecida.findById(req.params.id).exec();
    /* console.log(cuota)*/
    res.json(dietaEstablecida);
}


dietaEstablecidaCtrl.editDietaEstablecida = async (req, res) => {
    const vdietaEstablecida = new DietaEstablecida(req.body);
    try {
        await DietaEstablecida.updateOne({ _id: req.body._id }, vdietaEstablecida);
        res.json({
            'status': '1',
            'msg': 'Dieta establecida updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
dietaEstablecidaCtrl.deleteDietaEstablecida = async (req, res) => {
    try {
        await DietaEstablecida.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Dieta establecida removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = dietaEstablecidaCtrl;