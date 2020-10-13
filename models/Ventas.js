const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentasSchema = new Schema({
    detalle: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: new Date(+new Date() + 7*24*60*60*1000)
    },
    total: {
        type: Number,
        required: true
    },
    clientes: [{
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    }],
    productos: [{
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    }]
});


module.exports = mongoose.model('Venta', VentasSchema);