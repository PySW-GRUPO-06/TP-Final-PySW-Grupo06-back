//defino controlador para el manejo de CRUD
const rutinaCtrl = require('./../controllers/rutina.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, rutinaCtrl.getAllRutina);
router.post('/',autCtrl.verifyToken, rutinaCtrl.createRutina);
router.get('/:id',autCtrl.verifyToken, rutinaCtrl.getRutina);
router.put('/:id',autCtrl.verifyToken, rutinaCtrl.editRutina);
router.delete('/:id',autCtrl.verifyToken, rutinaCtrl.deleteRutina);
//exportamos el modulo de rutas
module.exports = router;