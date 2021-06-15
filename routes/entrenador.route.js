//defino controlador para el manejo de CRUD
const entrenadorCtrl = require('./../controllers/entrenador.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, entrenadorCtrl.getAllEntrenador);
router.post('/',autCtrl.verifyToken, entrenadorCtrl.createEntrenador);
router.get('/:id',autCtrl.verifyToken, entrenadorCtrl.getEntrenador);
router.put('/:id',autCtrl.verifyToken, entrenadorCtrl.editEntrenador);
router.delete('/:id',autCtrl.verifyToken, entrenadorCtrl.deleteEntrenador);
//exportamos el modulo de rutas
module.exports = router;