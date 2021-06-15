//defino controlador para el manejo de CRUD
const ejercicioCtrl = require('./../controllers/ejercicio.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', ejercicioCtrl.getAllEjercicio);
router.post('/', ejercicioCtrl.createEjercicio);
router.get('/:id', ejercicioCtrl.getEjercicio);
router.put('/:id', ejercicioCtrl.editEjercicio);
router.delete('/:id', ejercicioCtrl.deleteEjercicio);
//exportamos el modulo de rutas
module.exports = router;