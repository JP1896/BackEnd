const mongoose = require('mongoose')

// Definir Schema
const LibrosSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    paginas:{
        type: Number,
        required: true
    }
},{collection:'Libros'})

// Compilar modelo de schema
module.exports = mongoose.model('Libros',LibrosSchema)