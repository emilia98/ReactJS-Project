const passport = require('passport');
const passportJWT = require('passport-jwt');
const extractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
const User = require('./../models/User');

passport.use(new JWTStrategy({
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'my_react_app'
},

async function (tokenPayload, callback) {
  let userFound;

  console.log('TOKENS');
  // console.log("TEHEEEEE");
  try {
    userFound = await User.findOne({username: tokenPayload.username});

    if (userFound) {
      return callback(null, userFound);
    }

    return callback(null, null);
    
  } catch (err) {
    return callback(err);
  }
}
));
/* module.exports = {
  isAuthenticated: (req, res, next) => {
    // If it's authenticated
    if (req.isAuthenticated()) {
      next();
      return;
    }

    // If it's not authenticated
    res.redirect('/user/login');
  }
};
*/
