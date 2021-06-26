const Asistencia = require('../models/asistencia');

const asistenciaCtrl = {}

asistenciaCtrl.getAllAsistencia = async (req, res) => {
    var asistencia = await Asistencia.find();
    res.json(asistencia);
}

asistenciaCtrl.createAsistencia = async (req, res) => {
    var asistencia = new Asistencia(req.body);
    try {
        await asistencia.save();
        res.json({
            'status': '1',
            'msg': 'asistencia guardado.',
            'id': asistencia._id
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

asistenciaCtrl.getAsistencia = async (req, res) => {
    const asistencia = await Asistencia.findById(req.params.id).exec();
    /* console.log(asistencia)*/
    res.json(asistencia);
}


asistenciaCtrl.editAsistencia = async (req, res) => {
    const vasistencia = new Asistencia(req.body);
    try {
        await Asistencia.updateOne({ _id: req.body._id }, vasistencia);
        res.json({
            'status': '1',
            'msg': 'asistencia updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
asistenciaCtrl.deleteAsistencia = async (req, res) => {
    try {
        await Asistencia.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'asistencia removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = asistenciaCtrl;