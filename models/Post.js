const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
    {
        type: DataTypes.STRING,
         allowNull: false
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'post',
    }
);

module.exports = Post;