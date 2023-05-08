const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');

//show all posts for the logged in user on the homepage
// find all posts and then render them 
router.get("/", withAuth, async (req, res) => {
    try {
        const getPosts = await Post.findAll({
            include: [User]
        });
        
        const allPosts = getPosts.map((post) => post.get({plain: true}));
        res.render("every-post", {allPosts, loggedIn: req.session.loggedIn});
        
    } catch (error) {
        res.status(500).json(error);
    }
});

//show a single post byt ID and include User data associated with it.
router.get("/post:id", withAuth, async (req,res) => {
    try {
        const getPosts = await Post.findByPk(req.params.id {
            include: [User, {model: Comment, include: [User]}],
        });

        if (getPosts) {
            const post = getPosts.get({ plain: true});
            res.render('one-post', {post, loggedIn: req.session.loggedIn});
        } else {
            res.status(404).json({message: "Post not found!"}).end();
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//log in to account or go to the dashboard
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/dashboard");
        return;
    } 
    res.render("login")

});

//signup or go home
router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("signup");
});

module.exports = router;