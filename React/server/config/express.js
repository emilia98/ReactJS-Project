const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const multer = require('multer');
const single = multer().single();
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const GoogleStrategy = require('./passport-strategies/google-auth');


require('./passport');
require('./passport-strategies/google-auth');
require('../config/auth');

const publicFiles = path.normalize(
  path.join(__dirname, '../public')
);


module.exports = (app, config) => {
  app.use('/public', express.static(publicFiles));

  app.use(logger('dev'));
  app.use(cookieParser());
  /*
  app.use(session({
    secret: 's3cr3t',
    saveUninitialized: false,
    resave: false
  })); */
  // console.log('passof');
  app.use(passport.initialize());
  // app.use(passport.session());

  // console.log('passof');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(single);
  
  // Set up the view engine
  app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/partials'
  }));
  app.set('view engine', '.hbs');

  
  const auth = require('../routes/auth');
  const visited = require('../controllers/user/visited');
  const authMiddleware = require('../middlewares/authentication');


// console.log('shit');
  app.use('/auth', auth);
  // app.use('')

  

  app.use('/visited', authMiddleware.isAuthenticated, visited);
  
  app.get('/logout', function (req, res){
    req.session.destroy(function (err) {
      res.redirect('/'); //Inside a callback… bulletproof!
    });
  });
  /*
 
 app.get('/auth/google',
passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  */
};
