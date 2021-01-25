var express = require('express');
var router = express.Router();

const productoController = require("../controllers/producto.controller.js");

/* GET maestros listing. */
router.get('/all', productoController.findAll);

/* GET maestros listing with view */
router.get('/view',  productoController.findAllView);

// router.get('/save/form',  maestroController.saveFormView);
// router.post('/save',  maestroController.create);

// router.get('/byOne/:id', maestroController.findOne);

// //Edit
// router.get('/UpOne/:id', maestroController.updateView);
// router.put('/UpdateOne/:id', maestroController.update);
// router.post('/UpdateOne/:id', maestroController.update);

//Delete
// router.get("/eliminar/:id", maestroController.delete);
// router.delete("/eliminar/:id", maestroController.delete);
// router.delete("/eliminar", maestroController.deleteAll);

module.exports = router;
