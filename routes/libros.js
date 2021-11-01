// Bibliotecas
const router = require('express').Router();
const lController = require('../controllers/libros');

router.post('/agregarLibro',lController.postAgregarLibro)
router.get('/obtenerLibro',lController.getObtenerLibro)
router.post('/borrarLibro',lController.postBorrarLibro)
router.post('/actualizarLibro',lController.postActualizarLibro)

module.exports = router