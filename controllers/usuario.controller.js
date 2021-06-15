const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

const usuarioCtrl = {}

usuarioCtrl.getAllUsuario = async (req, res) => {
    var usuario = await Usuario.find();
    res.json(usuario);
}

usuarioCtrl.loginUsuario = async (req, res) => {
    const criteria = {
        username: req.body.username,
        password: req.body.password
    }
    Usuario.findOne(criteria, function (err, user) {
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!user) {
            res.json({
                status: 0,
                message: "notfound"
            })
        } else {
            constunToken = jwt.sign({ id: user._id }, "secretkey");
            res.json({
                status: 1,
                message: "success",
                username: user.username,
                userid: user._id, 
                perfinl: user.perfil,
                token: unToken
            });
        }
    })
}

usuarioCtrl.createUsuario = async (req, res) => {
    var usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.json({
            'status': '1',
            'msg': 'usuario guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

usuarioCtrl.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id).exec();
    /* console.log(usuario)*/
    res.json(usuario);
}


usuarioCtrl.editUsuario = async (req, res) => {
    const vusuario = new Usuario(req.body);
    try {
        await Usuario.updateOne({ _id: req.body._id }, vusuario);
        res.json({
            'status': '1',
            'msg': 'usuario updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
usuarioCtrl.deleteUsuario = async (req, res) => {
    try {
        await Usuario.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'usuario removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = usuarioCtrl;