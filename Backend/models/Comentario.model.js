module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define("comentario", {
    // idCliente: {
    //   type: DataTypes.INT
    // },
    // idComentario: {
    //   type: DataTypes.INT
    // },
    Descripcion: {
      type: DataTypes.STRING
    }
  });
      
  
  return Comentario;
};