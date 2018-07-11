const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GoogleKeys = require('../keys').googlePlus;
const Keys = require('../keys');
const UserGoogle = require('../../models/User_Google');
const User = require('../../models/User');
const JWT = require('jsonwebtoken');

/*
function generateToken (payload) {
  let token = JWT.sign(
    payload,
    Keys.token.secretKey,
    {
      expiresIn: '3d'
    }
  )
}

*/
module.exports = () => {

  /*
  passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    let userFound = await UserGoogle.findById(id);
    console.log(userFound);
  });
*/
  passport.use(
    new GoogleStrategy({
      clientID: GoogleKeys.clientID,
      clientSecret: GoogleKeys.clientSecret,
      callbackURL: '/auth/google/login'
    },
    async (accessToken, refreshToken, profile, callback) => {
      // console.log(profile);
      let user = await UserGoogle.findOne({googleId: profile.id});
      console.log('Stored');

       
      // window.close();
      let createUser = null;
      if (!user) {
        createUser = await new UserGoogle({
          email: profile.emails[0].value,
          username: profile.displayName,
          googleId: profile.id
        });

        let newGoogleUser = await UserGoogle.create(createUser);


        //TODO:
        // Set tokens in here   
        callback(null, newGoogleUser);
      } else {
        callback(null, user);
      }


    })
  );
};
