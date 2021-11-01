// Bibliotecas
const express = require('express')
const cController = require('../controllers/canciones')
const router = express.Router()

router.post('/agregarCancion',cController.postAgregarCancion)
router.get('/obtenerCancion',cController.getObtenerCancion)
router.post('/borrarCancion',cController.postBorrarCancion)
router.post('/actualizarCancion'.cController.postActualizarCancion)

module.exports = router