module.exports = (sequelize, DataTypes) => {
  const Maestro = sequelize.define("maestro", {
    item: {
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING
    },
    valor: {
      type: DataTypes.FLOAT
    }
  });

  return Maestro;
};