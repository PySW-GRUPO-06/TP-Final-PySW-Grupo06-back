const Dieta = require('../models/dieta');

const dietaCtrl = {}

dietaCtrl.getAllDieta=async(req, res)=>{
    var dieta=await Dieta.find();
    res.json(dieta);
}

dietaCtrl.crearDieta=async(req, res)=>{
    var dieta = new Dieta(req.body);
    try {
        await dieta.save();
        res.json({
            'status': '1',
            'msg': 'dieta guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
dietaCtrl.getDieta=async(req,res)=>{
    const dieta = await Dieta.findById(req.params.id).exec();
    res.json(dieta);
}

dietaCtrl.editDieta=async(req,res)=>{
    const vdieta=new Dieta(req.body);
    try {
        await Dieta.updateOne({ _id: req.body._id }, vdieta);
        res.json({
            'status': '1',
            'msg': 'dieta updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

dietaCtrl.deletDieta=async(req,res)=>{
    try {
        await Dieta.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'dieta removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports=dietaCtrl;