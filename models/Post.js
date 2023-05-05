const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Comment.init(
    {
        //define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        },
        post: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //foreign keys
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'comment',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'post',
    }
);

module.exports = Post;