const mongoose = require('mongoose')

// Definir Schema
const CancionesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    autor:{
        type: [String],
        required: true
    },
    album:{
        type: Number,
        required: true
    }
},{collection:'Canciones'})

// Compilar modelo de schema
module.exports = mongoose.model('Canciones',CancionesSchema)