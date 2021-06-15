//defino controlador para el manejo de CRUD
const cuotaCtrl = require('./../controllers/cuota.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', cuotaCtrl.getAllCuota);
router.post('/', cuotaCtrl.createCuota);
router.get('/:id', cuotaCtrl.getCuota);
router.put('/:id', cuotaCtrl.editCuota);
router.delete('/:id', cuotaCtrl.deleteCuota);
//exportamos el modulo de rutas
module.exports = router;