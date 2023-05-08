const { Comment } = require('../models');

const commentData = [{
        comment_text: "I totally agree, this changed my life!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "You don't know what you're talking about, that's not true at all.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "raisins are bad.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;