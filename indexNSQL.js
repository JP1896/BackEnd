const express = require('express')
const moongose = require('moongose')
const librosRoutes = require('./routes/libros')
const cancionesRoutes = require('./routes/canciones')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/libros',librosRoutes)
app.use('/canciones',cancionesRoutes)

mongoose.connect('mongodb://userX:root@54.198.161.35:27017/baseX?authSource=admin')
.then(()=>{
    app.listen(8080,()=>console.log('Servidor en linea'))
})
.catch(err=>console.log(err))