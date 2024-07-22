const {Model, DataType, DataTypes}= require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model{};

Post.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        body:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        votes:{
            type: DataTypes.INTEGER,
            allowNull: true 
        },
        post_id:{
           type: DataTypes.INTEGER,
           references:{
            model:"post",
           }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored:true,
        modelName:'post'
    }
);

module.exports = {Post}; 