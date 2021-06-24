const Noticia = require('../models/noticia');

const noticiaCtrl = {}

noticiaCtrl.getAllNoticia = async (req, res) => {
    var noticia = await Noticia.find();
    res.json(noticia);
}

noticiaCtrl.createNoticia = async (req, res) => {
    var noticia = new Noticia(req.body);
    try {
        await noticia.save();
        res.json({
            'status': '1',
            'msg': 'noticia guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

noticiaCtrl.getNoticia = async (req, res) => {
    const noticia = await Noticia.findById(req.params.id).exec();
    /* console.log(noticia)*/
    res.json(noticia);
}

noticiaCtrl.editnoticia = async (req, res) => {
    const vnoticia = new Noticia(req.body);
    try {
        await Noticia.updateOne({ _id: req.body._id }, vnoticia);
        res.json({
            'status': '1',
            'msg': 'noticia updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
noticiaCtrl.deleteNoticia = async (req, res) => {
    try {
        await Noticia.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'noticia removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = noticiaCtrl;