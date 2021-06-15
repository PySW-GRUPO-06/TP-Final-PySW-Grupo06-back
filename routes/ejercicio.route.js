//defino controlador para el manejo de CRUD
const ejercicioCtrl = require('./../controllers/ejercicio.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, ejercicioCtrl.getAllEjercicio);
router.post('/',autCtrl.verifyToken, ejercicioCtrl.createEjercicio);
router.get('/:id',autCtrl.verifyToken, ejercicioCtrl.getEjercicio);
router.put('/:id',autCtrl.verifyToken, ejercicioCtrl.editEjercicio);
router.delete('/:id',autCtrl.verifyToken, ejercicioCtrl.deleteEjercicio);
//exportamos el modulo de rutas
module.exports = router;