const Persona = require('../models/persona');

const personaCtrl = {}

personaCtrl.getAllPersona = async (req, res) => {
    var persona = await Persona.find().populate('usuario').exec();
    res.json(persona);
}

personaCtrl.createPersona = async (req, res) => {
    var persona = new Persona(req.body);
    try {
        await persona.save();
        res.json({
            'status': '1',
            'msg': 'persona guardado.',
            'id': persona._id
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

personaCtrl.getPersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id).populate('usuario').exec();
    /* console.log(persona)*/
    res.json(persona);
}

personaCtrl.getPersonaDNI = async (req, res) => {
    const persona = await Persona.find(req.params).populate('usuario').exec();
    /* console.log(persona)*/
    res.json(persona);
}

personaCtrl.editPersona = async (req, res) => {
    const vpersona = new Persona(req.body);
    try {
        await Persona.updateOne({ _id: req.body._id }, vpersona);
        res.json({
            'status': '1',
            'msg': 'persona updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
personaCtrl.deletePersona = async (req, res) => {
    try {
        await Persona.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'persona removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = personaCtrl;