// const administrador = db.import('./Administrador.model.js');

module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define("producto", {
    // idProducto: {
    //   type: DataTypes.INT
    // },
    Nombre: {
      type: DataTypes.STRING, allowNull: false
    },
    Stock: {
      type: DataTypes.INTEGER
    },
    FechaVencimiento: {
      type: DataTypes.DATE
    },
    FechaIngreso: {
      type: DataTypes.DATE
    },
    // idAdministrador: {
    //   type: DataTypes.INTEGER, allowNull: false,
    //   references: {
    //     model: administrador,
    //     key: 'idAdministrador'
    //   }
    // }
  });

  return Producto;
};