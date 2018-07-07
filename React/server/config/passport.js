const passport = require('passport');
const LocalPassport = require('passport-local');
const User = require('../models/User');

module.exports = () => {
    passport.use(new LocalPassport(async (username, password, done) => {
        let user;
        
        try {
            user = await User.findOne({username: username});
        } catch (err) {
            return done(null, false);
        }

        if (!user) {
           // console.log('user do not exist');
           // console.log(user);
            return done(null, { username: null });
        }

        // console.log('shit');
        if(!user.authenticate(password)) {
            return done(null,  { password: null });
        }

        return done(null, user);
    }));

    passport.serializeUser((user, done) => {
        if (user) {
            return done(null, user._id);
        }
    });

    passport.deserializeUser(async (id, done) => {
        let user = await User.findById(id);

        console.log('sy');
        if(!user) {
            return done(null, false);
        }

        return done(null, user);
    });
}
