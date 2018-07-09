const passport = require('passport');

module.exports.isAuthenticated = (req, res, next) => {
    console.log('TUK SYM');
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        console.log(user);
        if (err) {
            return res.status(401).json({isAuthenticated: false}); 
        }
        if (!user) {
            return res.status(401).json({isAuthenticated: false}); 
        }
        next();
      })(req, res, next); 
};
