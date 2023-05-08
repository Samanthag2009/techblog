const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

//post request for a new user
router.post('/', async (req, res) => {
    const body = req.body;

    try {
        const newUser = await User.create({ username: req.body.username, password: req.body.password });
    
    //save the session with new credentials
    req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.password = user.password;

        res.json(newUser);
    });
    }
    catch (error) {
        res.status(500).json(error);
    }
});

//post request for logging in
router.post('/login', async (req, res) => {
     try { const returningUser = await User.findOne ({
        where: {
            username: req.body.username,
            password: req.body.password,
        }
    });
    
        if (!returningUser) {
        res.status(404).json({message: "User not found!"});
        return;
        }

        const userPassword = returningUser.validatePassword(req.body.password);

        if (!userPassword){
        res.status(404).json({message: "Password not validated!"});
        return;
        }

        req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.password = user.password;

        res.json(newUser);
        });
    } catch (error) {
        res.status(404).json({message: "Could not find user account."});
    }

});

//post request for logging out
router.post('/login', async (req, res) => {
    //if there is a login session, shut it down
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(500).end();
        });
    }
});

module.exports = router;