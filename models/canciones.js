const Sequelize = require('sequelize')
const Cancion = (Sequelize)=>{
    Sequelize.define('cancion',{
        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        nombre:Sequelize.STRING,

        autor:Sequelize.STRING,

        album:Sequelize.STRING
    })

}

module.exports = Cancion
