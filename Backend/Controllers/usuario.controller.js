const db = require("../models");
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;

// Create and Save a new Producto
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre || !req.body.Stock) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
  }

// Create a Producto
  const Usuario = {
    Nombre: req.body.Nombres,
    Apellidos: req.body.Apellidos,
    Email: req.body.Email,
    sexo: req.body.sexo,
    Ciudad: req.body.Ciudad,
    Telefono: req.body.Telefono
  };

// Save Tutorial in the database
  Usuario.create(user)
    .then(data => {
        res.redirect('/usuario/view');
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the maestros."
        });
    });
};

// Create and Save a new Maestro
// exports.saveFormView = (req, res) => { 
//   res.render('maestro_post', { titulo: 'Guardar Maestro' });
// };

// Retrieve all Productos from the database.
exports.findAll = (req, res) => {
  Usuario.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving maestros."
      });
    });
};

exports.findAllView = (req, res) => {
  Usuario.findAll()
    .then(data => {
      res.render('productos', { titulo: 'Productos Lubricadora Saldur', productos: data });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving maestros."
      });
    });
}

// Find a single Maestro with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
  });
};