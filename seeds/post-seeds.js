const { Post } = require('../models');

const postData = [{
        title: 'mySQL2 and why I love it',
        content: 'Honestly, why anyone would want to use a database that is not relational is beyond me. SQL 4 Lyfe.',
        user_id: 1

    },
    {
        title: 'CSS is Garbage',
        content: 'CSS broke into my house and drank all my gatorade.',
        user_id: 2
    },
    {
        title: 'NPM Packages?',
        content: 'Hey, is there an NPM Package that can refresh my server whenever there is a change? Thanks in advance!',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;