//defino controlador para el manejo de CRUD
const usuarioCtrl = require('./../controllers/usuario.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', usuarioCtrl.getAllUsuario);
router.post('/', usuarioCtrl.createUsuario);

router.get('/:id',autCtrl.verifyToken, usuarioCtrl.getUsuario);
router.put('/:id',autCtrl.verifyToken, usuarioCtrl.editUsuario);
router.delete('/:id',autCtrl.verifyToken, usuarioCtrl.deleteUsuario);

router.post('/login', usuarioCtrl.loginUsuario);
//exportamos el modulo de rutas
module.exports = router;