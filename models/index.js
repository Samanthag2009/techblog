const Comment =require("./Comment");
const Post = require('./Post');
const PostComment = require("./PostComment");
const User = require("./User")

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Post.hasMany(Comment, {
    foreignKey: "post_id"
})

Post.belongsToMany(Comment, {
    through: PostComment,
    foreignKey: "post_id"
})

Comment.belongsTo(User, {
    foreignKey: "user_id"
})

Comment.belongsToMany(Post, {
    through: PostComment,
    foreignKey: "comment_id"
})



module.exports = {
    User,
    Comment,
    Post,
    PostComment
}