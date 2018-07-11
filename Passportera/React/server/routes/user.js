let router = require('express').Router();
const passport = require('passport');
const isAuthenticated = require('../middlewares/authentication').isAuthenticated;

router.get('/here',  (req, res) => 
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        //console.log(user);
        if (user) {
          return res.json({user: user._id});
        } 

        return res.json(false);
    })(req, res)
);

router.get('/profile/me', isAuthenticated, (req, res) => {
    //console.log(req.url);
    // console.log(req.user);
    // console.log(req.isAuthenticated());
    // console.log(res.locals);
    let userData = res.locals.user;

    console.log(userData);
    res.json({
        isAuth: req.isAuthenticated()
    });
});

module.exports = router;
