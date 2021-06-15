//defino controlador para el manejo de CRUD
const cuotaCtrl = require('./../controllers/cuota.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, cuotaCtrl.getAllCuota);
router.post('/',autCtrl.verifyToken, cuotaCtrl.createCuota);
router.get('/:id',autCtrl.verifyToken, cuotaCtrl.getCuota);
router.put('/:id', autCtrl.verifyToken,cuotaCtrl.editCuota);
router.delete('/:id',autCtrl.verifyToken, cuotaCtrl.deleteCuota);
//exportamos el modulo de rutas
module.exports = router;