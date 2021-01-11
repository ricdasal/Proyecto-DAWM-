const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.Vendedor = require("./vendedor.model.js")(sequelize, Sequelize);
db.Cliente = require("./cliente.model.js")(sequelize, Sequelize);
db.Comentario = require("./comentario.model.js")(sequelize, Sequelize);
db.Administrador = require("./administrador.model.js")(sequelize, Sequelize);
db.Producto = require("./producto.model.js")(sequelize, Sequelize);

// db.maestro.hasMany(db.detalle, { as: "detalles" });
// db.detalle.belongsTo(db.maestro, {
//   foreignKey: "maestroId",
//   as: "maestro",
// });

module.exports = db;