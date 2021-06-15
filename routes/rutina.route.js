//defino controlador para el manejo de CRUD
const rutinaCtrl = require('./../controllers/rutina.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', rutinaCtrl.getAllRutina);
router.post('/', rutinaCtrl.createRutina);
router.get('/:id', rutinaCtrl.getRutina);
router.put('/:id', rutinaCtrl.editRutina);
router.delete('/:id', rutinaCtrl.deleteRutina);
//exportamos el modulo de rutas
module.exports = router;