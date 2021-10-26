const path = require('path')
const moongoose = require('moongose')
const cancion = require('../utils/database').models.libros
//CRUD
//-----------------------------------------------
exports.postAgregarLibro=(req,res)=>{
    console.log(req.body)
    libro.create(req.body)
        .then(lib=>{
            console.log('Registro Exitoso')
            res.json({estado:"Acepatdo"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado:"Error"})
        })
}
//-----------------------------------------------
exports.getObtenerLibro = (req,res)=>{
    libro.findAll()
        .then(libros =>{
            console.log(libros)
            res.json(libros)
        })
        .catch(err=>console.log(err))
} 
//-----------------------------------------------
exports.postBorrarLibro = (req,res)=>{
    console.log(req.body)
    libro.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(() =>{
        console.log("Libro Eliminado")
        res.json({estado: "Aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "Error"})
    })
}
//-----------------------------------------------

exports.postActualizarLibro = (req,res)=>{
    console.log(req.body)
    libro.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    }
    )
    .then(() =>{
        console.log("Libro Actualizado")  
        res.json({estado: "Aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}