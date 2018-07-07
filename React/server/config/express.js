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

require('./passport');
//const upload = multer({dest: 'public/uploads'});

const publicFiles = path.normalize(
  path.join(__dirname, '../public')
);


module.exports = (app, config) => {
  app.use('/public', express.static(publicFiles));

  app.use(logger('dev'));
 app.use(cookieParser());
  app.use(session({
    secret: 's3cr3t',
    saveUninitialized: false,
    resave: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

 

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
  app.use('/user', auth);
};
