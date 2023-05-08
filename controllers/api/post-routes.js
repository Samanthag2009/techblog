const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//post request to make a new blog post provided that the user is logged in.
router.post('/', withAuth, async (req, res) => {
    const body = req.body;

    try {
        const newBlogPost = await Post.create({ body, userID: req.session.userId });
        res.json(newBlogPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

//update blog posts
router.put('/:id', withAuth, async (req, res) => {
    
});

//delete blog posts