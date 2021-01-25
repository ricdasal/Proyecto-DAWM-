module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define("cliente", {
    // idCliente: {
    //   type: DataTypes.INT
    // },
    // idUsuario: {
    //   type: DataTypes.INT
    // },
    FechaNacimiento: {
      type: DataTypes.DATE
    },
    Provincia: {
      type: DataTypes.STRING
    },
    Ciudad: {
      type: DataTypes.STRING
    },
    Promociones: {
      type: DataTypes.BOOLEAN
    }
  });
    

  return Cliente;
};

