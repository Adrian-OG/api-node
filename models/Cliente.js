const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    nombre : {
        type : String,
        required: true
    },
    apellidos: {
        type : String,
        required: true
    },
    dni: {
        type : String,
        required: true
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);