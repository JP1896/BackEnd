const path = require('path')
const moongoose = require('moongose')
const cancion = require('../utils/database').models.cancion
//CRUD
//-----------------------------------------------
exports.postAgregarCancion=(req,res)=>{
    console.log(req.body)
    cancion.create(req.body)
        .then(can=>{
            console.log('Registro Exitoso')
            res.json({estado:"Aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado:"Error"})
        })
}
//-----------------------------------------------
exports.getObtenerCancion = (req,res)=>{
    cancion.findAll()
        .then(canciones =>{
            console.log(canciones)
            res.json(canciones)
        })
        .catch(err=>console.log(err))
} 
//-----------------------------------------------
exports.postBorrarCancion = (req,res)=>{
    console.log(req.body)
    cancion.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(() =>{
        console.log("Cancion Eliminada")
        res.json({estado: "Aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "Error"})
    })
}
//-----------------------------------------------

exports.postActualizarCancion = (req,res)=>{
    console.log(req.body)
    cancion.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    }
    )
    .then(() =>{
        console.log("Cancion Actualizada")  
        res.json({estado: "Aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}