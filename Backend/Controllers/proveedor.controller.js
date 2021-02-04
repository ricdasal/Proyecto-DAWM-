const Proveedor = require("../collections/proveedor.model");

exports.findByProduct = (req, res) => { 
    //busca todos los datos en la base y muestra solo el campo o columna "DISTRITO", el id no se muestra
    Proveedor.find({"producto": req.params.producto}, {_id:0}, (err,docs) => {
        res.send(docs);
    })
};
