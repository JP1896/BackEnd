const Libro = require('../models/libros')
const mongoose = require("mongoose")

//CRUD
//------------------- Agregar ----------------------------
exports.postAgregarLibro = async (req,res)=>{
    const libro = new Libro(req.body)
    libro._id = new mongoose.Types.ObjectId()
    try{
        // Agregar documento a la coleccion
        await libro.save()
        console.log(libro)
        console.log("Libro registrado")
        res.send({operacion:"correcta"})

    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

//------------------- Obtener ----------------------------
exports.getObtenerLibro = async (req,res)=>{
    const libro = await Libro.find()
    console.log(libro)
    res.json(libro)
} 

//------------------- Actualizar -------------------------
exports.postActualizarLibro = async (req,res)=>{
    // Filtro y cambio
    try {
        await Libro.findOneAndUpdate({ nombre: req.body.filtro.nombre },req.body.cambio)
        Libro.exists()
        console.log("Libro actualizado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}

//------------------- Borrar -----------------------------
exports.postBorrarLibro = async (req,res)=>{
    try{
        const existe = await Libro.exists({ nombre: req.body.nombre })
        if (existe){
            await Libro.findOneAndRemove({ nombre: req.body.nombre })
            console.log("Libro eliminado")
            res.json({operacion:"correcta"})
        }else{
            console.log("Libro no encontrado")
            res.json({operacion:"incorrecta"})
        }
        
    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}