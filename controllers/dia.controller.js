const Dia = require('../models/dia');

const diaCtrl = {}

diaCtrl.getAllDia = async (req, res) => {
    var dia = await Dia.find();
    res.json(dia);
}

diaCtrl.createDia = async (req, res) => {
    var dia = new Dia(req.body);
    try {
        await dia.save();
        res.json({
            'status': '1',
            'msg': 'dia guardado.',
            'id': dia._id
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

diaCtrl.getDia = async (req, res) => {
    const dia = await Dia.findById(req.params.id).populate('ejercicios').exec();
    /* console.log(rutina)*/
    res.json(dia);
}


diaCtrl.editDia = async (req, res) => {
    const vdia = new Dia(req.body);
    try {
        await Dia.updateOne({ _id: req.body._id }, vdia);
        res.json({
            'status': '1',
            'msg': 'dia updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
diaCtrl.deleteDia = async (req, res) => {
    try {
        await Dia.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'dia removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = diaCtrl;