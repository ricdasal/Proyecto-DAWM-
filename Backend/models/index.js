const dbConfig = require("../config/db.config.js");

const Sequelize = require('sequelize');
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

db.Usuario = require("./Usuario.model.js")(sequelize, Sequelize);
db.Vendedor = require("./Vendedor.model.js")(sequelize, Sequelize);
db.Cliente = require("./Cliente.model.js")(sequelize, Sequelize);
db.Comentario = require("./Comentario.model.js")(sequelize, Sequelize);
db.Administrador = require("./Administrador.model.js")(sequelize, Sequelize);
db.Producto = require("./Producto.model.js")(sequelize, Sequelize);

db.Producto.hasOne(db.Administrador, { as: "idAdministrador" });
// db.Administrador.hasMany(db.Producto, {
//     foreignKey: "maestroId",
//     as: "maestro",
// });

module.exports = db;