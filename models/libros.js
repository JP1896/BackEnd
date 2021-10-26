const Sequelize = require('sequelize')
const Libro = (Sequelize)=>{
    Sequelize.define('libro',{
        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        nombre:Sequelize.STRING,

        autor:Sequelize.STRING,

        paginas:Sequelize.INTEGER
    })

}

module.exports = Libro
