const {Model, DataType, DataTypes}= require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model{};

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        body:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        votes:{
            type:DataTypes.INTEGER,
            allowNull:true,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
    }
);


module.exports = {Comment}; 