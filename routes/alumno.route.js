//defino controlador para el manejo de CRUD
const alumnoCtrl = require('./../controllers/alumno.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, alumnoCtrl.getAllAlumno);
router.post('/',autCtrl.verifyToken, alumnoCtrl.createAlumno);
router.get('/:id',autCtrl.verifyToken, alumnoCtrl.getAlumno);
router.put('/:id',autCtrl.verifyToken, alumnoCtrl.editAlumno);
router.delete('/:id',autCtrl.verifyToken, alumnoCtrl.deleteAlumno);
//exportamos el modulo de rutas
module.exports = router;