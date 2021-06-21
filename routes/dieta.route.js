//defino controlador para el manejo de CRUD
const dietaCtrl =require('./../controllers/dieta.controller');
const autCtrl=require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, dietaCtrl.getAllDieta);
router.post('/',autCtrl.verifyToken, dietaCtrl.crearDieta);
router.get('/:id',autCtrl.verifyToken, dietaCtrl.getDieta);
router.put('/:id', autCtrl.verifyToken,dietaCtrl.editDieta);
router.delete('/:id',autCtrl.verifyToken, dietaCtrl.deletDieta);
//exportamos el modulo de rutas
module.exports = router;