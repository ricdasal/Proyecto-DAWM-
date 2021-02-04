module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("usuario", {
    Nombres: {
      type: DataTypes.STRING
    },
    Apellidos: {
      type: DataTypes.STRING
    },
    Email: {
      type: DataTypes.STRING
    },
    Sexo: {
      type: DataTypes.STRING
    },
    Ciudad: {
      type: DataTypes.STRING
    },
    Telefono: {
      type: DataTypes.INTEGER
    },
    Passw : {
      type: DataTypes.INTEGER
    }
  });
    

  return Usuario;
};