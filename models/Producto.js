const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    cantidad : {
        type : Number,
        required: true
    },
    categoria: {
        type : String,
        required: true
    },
    codigo : {
        type : String,
        required: true
    },
    nombre: {
        type : String,
        required: true
    },
    precio : {
        type : Number,
        required: true
    },
    clientes: [{
         type : Schema.Types.ObjectId,
         ref: 'Cliente'
    }]
});


module.exports = mongoose.model('Producto', ProductoSchema);