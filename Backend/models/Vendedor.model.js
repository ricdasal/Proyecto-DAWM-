module.exports = (sequelize, DataTypes) => {
  const Vendedor = sequelize.define("vendedor", {
    // idVendedor: {
    //   type: DataTypes.INT
    // },
    // idUsuario: {
    //   type: DataTypes.INT
    // },
    Rol: {
      type: DataTypes.STRING
    },
    salario: {
      type: DataTypes.FLOAT
    },
  });
    

  return Vendedor;
};

