const mongoose = require("mongoose");

let LinkSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    contador: {
        type: Number,
        require: true
    }
});

let Link = new mongoose.model("Link",LinkSchema);

module.exports = {
    Insertar: (link,callback) => {
        console.debug("Intento crear link a " + link);
        let newLink = new Link({
            url: link,
            contador: 0
        });
        newLink.save(callback);
    },
    ObtenerTodos: (callback) => {
        Link.find(callback);
    },
    Obtener: (id, callback) => {
        Link.findOne({_id: new mongoose.Types.ObjectId(id)},callback);
    },
    Actualizar: (id, contador, callback) => {
        Link.findOne({_id: new mongoose.Types.ObjectId(id)},(err,datos) => {
            if(err){
                callback(err);
            }else{
                datos.contador = contador;
                datos.save(callback);
            }
        });
    }
}