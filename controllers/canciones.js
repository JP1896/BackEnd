const Cancion = require('../models/canciones')
const mongoose = require("mongoose")

//CRUD
//------------------- Agregar ----------------------------
exports.postAgregarCancion = async (req,res)=>{
    const cancion = new Cancion(req.body)
    cancion._id = new mongoose.Types.ObjectId()
    try{
        // Agregar documento a la coleccion
        await cancion.save()
        console.log(cancion)
        console.log("Canción registrada")
        res.send({operacion:"correcta"})

    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

//------------------- Obtener ----------------------------
exports.getObtenerCancion = async (req,res)=>{
    const cancion = await Cancion.find()
    console.log(cancion)
    res.json(cancion)
}

//------------------- Actualizar -------------------------
exports.postActualizarCancion = async (req,res)=>{
    // Filtro y cambio
    try {
        await Cancion.findOneAndUpdate({ nombre: req.body.nombre },req.body.cambio)
        Cancion.exists()
        console.log("Canción actualizada")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}

//------------------- Borrar -----------------------------
exports.postBorrarCancion = async (req,res)=>{
    try{
        const existe = await Cancion.exists({ nombre: req.body.nombre })
        if (existe){
            await Cancion.findOneAndRemove({ nombre: req.body.nombre })
            console.log("Canción eliminada")
            res.json({operacion:"correcta"})
        }else{
            console.log("Canción no encontrada")
            res.json({operacion:"incorrecta"})
        }

    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}