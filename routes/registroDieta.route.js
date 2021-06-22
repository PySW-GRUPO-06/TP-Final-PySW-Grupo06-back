//defino controlador para el manejo de CRUD
const registroDietaCtrl = require('./../controllers/registroDieta.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, registroDietaCtrl.getAllRegistroDieta);
router.post('/',autCtrl.verifyToken, registroDietaCtrl.createRegistroDieta);
router.get('/:id',autCtrl.verifyToken, registroDietaCtrl.getRegistroDieta);
router.put('/:id',autCtrl.verifyToken, registroDietaCtrl.editRegistroDieta);
router.delete('/:id',autCtrl.verifyToken, registroDietaCtrl.deleteRegistroDieta);
//exportamos el modulo de rutas
module.exports = router;