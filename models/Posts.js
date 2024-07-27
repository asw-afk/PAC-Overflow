const {Model, DataType, DataTypes}= require("sequelize");
const sequelize = require("../config/connection");
const User = require('./User');
const Comments = require('./Comment')


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
            type: DataTypes.STRING,
            allowNull: false,
        },
        // game:{
        //  type: DataTypes.STRING,
        //  allowNull: false,
        // },
        body:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        votes:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
             model:"user",
             key:"id"
            }
         },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored:true,
        modelName:'post'
    }
);

module.exports = Post; 