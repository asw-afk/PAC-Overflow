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
        desc:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored:true,
        modelName:'post'
    }
);


class Comment extends Model{};

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        desc:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
    }
);

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = Posts, Comment; 