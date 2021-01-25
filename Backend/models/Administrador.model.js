module.exports = (sequelize, DataTypes) => {
  const Administrador = sequelize.define("administrador", {
    // idAdministrador: {
    //   type: DataTypes.INT
    // },
    // idUsuario: {
    //   type: DataTypes.INT
    // },
    Rol: {
      type: DataTypes.STRING
    },
    acceso: {
      type: DataTypes.BOOLEAN
    }
  });
  
  return Administrador;
};
