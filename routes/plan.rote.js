//defino controlador para el manejo de CRUD
const planCtrl = require('./../controllers/plan.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', planCtrl.getAllPlan);
router.post('/', planCtrl.createPlan);
router.get('/:id', planCtrl.getPlan);
router.put('/:id', planCtrl.editPlan);
router.delete('/:id', planCtrl.deletePlan);
//exportamos el modulo de rutas
module.exports = router;