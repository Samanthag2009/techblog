const Comment =require("./Comment");
const Post = require('./Post');
const User = require("./User")

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Post.hasMany(Comment, {
    foreignKey: "post_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});



module.exports = {
    User,
    Comment,
    Post
};