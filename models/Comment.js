const {Model, DataType, DataTypes}= require("sequelize");
const sequelize = require("../config/connection");
const User = require('./User');
const Post = require('./Posts');

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
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
             model:"user",
             key:"id"
            }
         },
        post_id:{
            type: DataTypes.INTEGER,
            references:{
             model:"post",
             key:"id"
            }
         }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName:'comment'
    }
);


module.exports = Comment; 