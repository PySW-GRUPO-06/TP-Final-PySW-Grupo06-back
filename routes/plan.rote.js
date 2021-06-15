//defino controlador para el manejo de CRUD
const planCtrl = require('./../controllers/plan.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, planCtrl.getAllPlan);
router.post('/',autCtrl.verifyToken, planCtrl.createPlan);
router.get('/:id',autCtrl.verifyToken, planCtrl.getPlan);
router.put('/:id',autCtrl.verifyToken, planCtrl.editPlan);
router.delete('/:id',autCtrl.verifyToken, planCtrl.deletePlan);
//exportamos el modulo de rutas
module.exports = router;