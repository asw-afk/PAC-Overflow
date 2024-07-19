const {Model, DataType, DataTypes}= require("sequelize");
const sequelize = require("../config/connection")

class User extends Model{};

User.init(
    {
        id:{
            type :DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement:true
        },
        mame:{
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
        sequelize,
        freezeTableName :true,
        underscored:true,
        modelName:'user'
    }
);
module.exports= User;