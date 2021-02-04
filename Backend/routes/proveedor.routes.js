var express = require('express');
var router = express.Router();

const proveedorController = require("../controllers/proveedor.controller.js");

//del filtro1.ejs se hace un post con el distrito seleccionado y aqui se carga los datos de la base
//de acuerdo al distrito seleccionado
router.get('/:producto', proveedorController.findByProduct);

module.exports = router;
