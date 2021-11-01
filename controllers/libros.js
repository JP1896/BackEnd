const Libro = require('../models/libros')
const mongoose = require("mongoose")

//CRUD
//------------------- Agregar ----------------------------
exports.postAgregarLibro=(req,res)=>{
    const libro = new Cancion(req.body)
    libro._id = new mongoose.Types.ObjectId()
    try{
        // Agregar documento a la coleccion
        await libro.save()
        console.log(libro)
        console.log("Canción registrada")
        res.send({operacion:"correcta"})

    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

//------------------- Obtener ----------------------------
exports.getObtenerLibro = (req,res)=>{
    const libro = await Libro.find()
    console.log(libro)
    res.json(libro)
} 

//------------------- Actualizar -------------------------
exports.postActualizarLibro = (req,res)=>{
    // Filtro y cambio
    try {
        await Libro.findOneAndUpdate(req.body.filtro,req.body.cambio)
        Libro.exists()
        console.log("Libro actualizado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}

//------------------- Borrar -----------------------------
exports.postBorrarLibro = (req,res)=>{
    try{
        await Libro.findOneAndRemove(req.body)
        console.log("Libro eliminado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}