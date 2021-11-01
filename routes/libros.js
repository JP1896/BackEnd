// Bibliotecas
const express = require('express')
const lController = require('../controllers/libros')
const router = express.Router()

router.post('/agregarLibro',lController.postAgregarLibro)
router.get('/obtenerLibro',lController.getObtenerLibro)
router.post('/borrarLibro',lController.postBorrarLibro)
router.post('/actualizarLibro'.lController.postActualizarLibro)

module.exports = router