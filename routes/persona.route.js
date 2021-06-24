//defino controlador para el manejo de CRUD
const personaCtrl = require('./../controllers/persona.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, personaCtrl.getAllPersona);
router.get('/dni/:dni',autCtrl.verifyToken, personaCtrl.getPersonaDNI);
router.post('/',autCtrl.verifyToken, personaCtrl.createPersona);
router.get('/:id',autCtrl.verifyToken, personaCtrl.getPersona);
router.put('/:id',autCtrl.verifyToken, personaCtrl.editPersona);
router.delete('/:id',autCtrl.verifyToken, personaCtrl.deletePersona);
//exportamos el modulo de rutas
module.exports = router;