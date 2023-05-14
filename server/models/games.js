const {sequelize} = require("../util/database")
const {DataTypes} = require("sequelize")


module.exports = {
    Games:
            sequelize.define("games", {
                id: {
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
                title: DataTypes.STRING,
                rating: DataTypes.STRING,
                isRealeased: DataTypes.BOOLEAN
        
            })
}