const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

//show all posts for the logged in user on the dashboard
// find all posts and then render them 
router.get("/", withAuth, async (req, res) => {
    try {
        const getPosts = await Post.findAll({
            where: {
                userId: req.session.userId
            }
        });
        
        const allPosts = getPosts.map((post) => post.get({plain: true}));
        res.render("every-post-dboard", {layout: "dashboard", allPosts});
        
    } catch (error) {
        res.status(500).json(error);
    }
});

//rendering new post on the dashboard from the "new post btn"

router.get ("/new", withAuth, (req, res) =>{

    res.render("new-post", {
     layout: "dashboard",
    })

});

//rendering edit post on dashboard

router.get ("/edit/:id", withAuth, (res, req) => {
    try {
        const getPosts = Post.findByPk(req.params.id);

        if (getPosts) {
            const post = getPosts.get({plain: true});
            res.render("update-post", {
                layout: "dashboard",
                post,
            })
        }
    } catch (error) {
        res.redirect('login');
    }
})

module.exports = router;