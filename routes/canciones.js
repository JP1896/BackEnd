// Bibliotecas
const router = require('express').Router();
const cController = require('../controllers/canciones');

router.post('/agregarCancion',cController.postAgregarCancion)
router.get('/obtenerCancion',cController.getObtenerCancion)
router.post('/borrarCancion',cController.postBorrarCancion)
router.post('/actualizarCancion',cController.postActualizarCancion)

module.exports = router