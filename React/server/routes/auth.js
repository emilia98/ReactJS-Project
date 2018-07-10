const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");


router.get('/google', // (req, res) => {
  // res.send('Google');
  // console.log('yhereee');
 // console.log(req.url);
 passport.authenticate('google', {
  scope: ['email']
})

  // passport.authenticate('google', { scope: ['profile'] }));
//}
);

router.get('/google/login', passport.authenticate('google'), (req, res) => {
  // console.log('dabne');
  //console.log(req.user);
  // res.send('Logeed');
  res.status(200).json({
    message: 'Tochno e!'
  });
});

router.post('/login', function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  // console.log('fuck be');
  passport.authenticate('local', { session: false }, (err, user) => {
    let result = {};
    result.errors = {};
    result.success = null;
    result.token = null;
    result.user = null;


   // console.log(req.body);

   // console.log(user);
    if (err) {
      // console.log('here');
      res.status(402).json('Authentication is unsuccessful!');
      return;
    }
    
    if (user.username === null) {
      // console.log('hereeee');
      result.errors.username = 'This user does not exist!';
      res.status(402).json(result);
      return;
    }

    if (user.password === null) {
      // console.log(`password = ${password}`);
      result.errors.password = 'Incorrect password!';
      res.status(402).json(result);
      return;
    }

    req.login(user, { session: false }, (error) => {
      if (error) {
        res.status(402).json('Authentication is unsuccessful!');
        return;
      }

      // console.log('da');
      // console.log(user);

      let userData = {
        userId: user._id,
        username: user.username,
        profilePicture: 'https://4.bp.blogspot.com/-L9CtV6gR8GI/WtgKA619aEI/AAAAAAAAF9c/CubtyZE94o076qCShJN_D2bdNiHoeIRxACEwYBhgL/s1600/cool%2Bprofile%2Bimages.png'
      };
      const token = jwt.sign(userData, 'my_react_app', {
        expiresIn: '30d'
      });

      result.user = userData;
      result.token = token;

      console.log(token);
      /* res.cookie('user', {
        token: token,
        user: userData
      });*/
      // console.log(token);

      return res.json(result);
    });
  })(req, res);
});

module.exports = router;
