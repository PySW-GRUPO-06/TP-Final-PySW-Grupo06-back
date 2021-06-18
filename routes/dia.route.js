//defino controlador para el manejo de CRUD
const diaCtrl = require('./../controllers/dia.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, diaCtrl.getAllDia);
router.post('/',autCtrl.verifyToken, diaCtrl.createDia);
router.get('/:id',autCtrl.verifyToken, diaCtrl.getDia);
router.put('/:id',autCtrl.verifyToken, diaCtrl.editDia);
router.delete('/:id',autCtrl.verifyToken, diaCtrl.deleteDia);
//exportamos el modulo de rutas
module.exports = router;