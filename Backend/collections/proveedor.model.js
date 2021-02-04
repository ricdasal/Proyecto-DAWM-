var mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({
    producto: {
        type: String
    },
    proveedor: {
        type: String
    },
    ciudad: {
        type: String
    },
    Activo: {
        type: String
    },
});

module.exports = mongoose.model('info_proveedor', ProveedorSchema, "info_proveedor");