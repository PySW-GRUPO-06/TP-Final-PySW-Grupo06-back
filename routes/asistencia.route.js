//defino controlador para el manejo de CRUD
const asistenciaCtrl = require('./../controllers/asistencia.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, asistenciaCtrl.getAllAsistencia);
router.post('/',autCtrl.verifyToken, asistenciaCtrl.createAsistencia);
router.get('/:id',autCtrl.verifyToken, asistenciaCtrl.getAsistencia);
router.put('/:id',autCtrl.verifyToken, asistenciaCtrl.editAsistencia);
router.delete('/:id',autCtrl.verifyToken, asistenciaCtrl.deleteAsistencia);
//exportamos el modulo de rutas
module.exports = router;