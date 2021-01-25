const db = require("../models");
const Producto = db.Producto;
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
  const Producto = {
    Nombre: req.body.Nombre,
    Stock: req.body.Stock,
    FechaVencimiento: req.body.FechaVencimiento,
    FechaIngreso: req.body.FechaIngreso,
    idAdministrador: req.body.idAdministrador
  };

// Save Tutorial in the database
  Producto.create(producto)
    .then(data => {
        res.redirect('/producto/view');
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
  Producto.findAll()
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
  Maestro.findAll()
    .then(data => {
      res.render('maestro_all', { titulo: 'Maestros', maestros: data });
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

  Maestro.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
  });
};

exports.updateView = (req, res) => {
  const id = req.params.id;

  Maestro.findByPk(id)
    .then(data => {
      res.render('maestro_put', { 
        titulo: 'Editar Maestro',
        maestro: data,
        Id: id
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
  });

}

// Update a Maestro by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Maestro.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "El maestro ha sido actualizado."
        });
      } else {
        res.send({
          message: `No se puede actualizar el maestro con id=${id}. revise el requerimiento!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Maestro with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Maestro.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `El registro con id=${id}. Ha sido eliminado!`
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Maestros from the database.
exports.deleteAll = (req, res) => {
  Maestro.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Maestros han sido eliminados` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};
