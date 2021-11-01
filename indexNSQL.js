const express = require('express')
const mongoose = require('mongoose')
const librosRoutes = require('./routes/libros')
const cancionesRoutes = require('./routes/canciones')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/libros',librosRoutes)
app.use('/canciones',cancionesRoutes)

mongoose.connect('mongodb://userX:root@54.198.161.35:27017/baseX?authSource=admin')
.then(()=>{
    app.listen(8084,()=>console.log('Servidor en linea en puerto 8084'))
})
.catch(err=>console.log(err))