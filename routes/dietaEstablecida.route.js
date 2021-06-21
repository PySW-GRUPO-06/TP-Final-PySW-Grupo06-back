//defino controlador para el manejo de CRUD
const dietaEstablecidaCtrl = require('./../controllers/dietaEstablecida.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, dietaEstablecidaCtrl.getAllDietaEstablecia);
router.post('/',autCtrl.verifyToken, dietaEstablecidaCtrl.createDietaEstablecida);
router.get('/:id',autCtrl.verifyToken, dietaEstablecidaCtrl.getDietaEstablecida);
router.put('/:id', autCtrl.verifyToken,dietaEstablecidaCtrl.editDietaEstablecida);
router.delete('/:id',autCtrl.verifyToken, dietaEstablecidaCtrl.deleteDietaEstablecida);
//exportamos el modulo de rutas
module.exports = router;