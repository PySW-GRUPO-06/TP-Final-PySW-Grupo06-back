//defino controlador para el manejo de CRUD
const noticiaCtrl = require('./../controllers/noticia.controller');
const autCtrl = require('./../controllers/auth.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, noticiaCtrl.getAllNoticia);
router.post('/',autCtrl.verifyToken, noticiaCtrl.createNoticia);
router.get('/:id',autCtrl.verifyToken, noticiaCtrl.getNoticia);
router.put('/:id',autCtrl.verifyToken,noticiaCtrl.editnoticia);
router.delete('/:id',autCtrl.verifyToken, noticiaCtrl.deleteNoticia);
//exportamos el modulo de rutas
module.exports = router;