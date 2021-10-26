const path = require('path');
const express = require('express');

const sequelize = require()


const app = express()

//Middlware
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

sequelize.sync()
    .then(
        app.listen(8084,()=>{
            console.log("Servidor en línea en el puerto 8084")
        })
    )
    .catch(err=>console.log(err))

