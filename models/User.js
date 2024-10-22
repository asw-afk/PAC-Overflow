const {Model, DataTypes}= require("sequelize");
const sequelize = require("../config/connection")
const bcrypt = require('bcrypt');
// const Comment = require('./Comment');
// const Post = require('./Posts');

class User extends Model{};

User.init(
    {
        id:{
            type :DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                isEmail:true,
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[6],
            }
        }

    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
              newUser.password = await bcrypt.hash(newUser.password, 8);
              return newUser;
            },
        },
        sequelize,
        freezeTableName :true,
        underscored:true,
        modelName:'user'
    }
);
module.exports= User;

// "title":"er",
// "game":"oly@groobly.com",
// "body": "123456789",
// "votes":3,
// "user_id":"1"