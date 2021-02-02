var express = require('express');
var router = express.Router();

const productoController = require("../controllers/producto.controller.js");

/* GET maestros listing. */
router.get('/all', productoController.findAll);

/* GET productos listing with view */
router.get('/view',  productoController.findAllView);

// router.get('/save/form',  maestroController.saveFormView);
router.post('/save',  productoController.create);

// router.get('/byOne/:id', maestroController.findOne);


module.exports = router;
