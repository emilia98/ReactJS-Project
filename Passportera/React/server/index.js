const express = require('express');
const config = require('./config/config');
const expressConfig = require('./config/express');
const routes = require('./routes/routes');
const database = require('./config/database');
const passportConfig = require('./config/passport');
const Google = require('./config/passport-strategies/google-auth');
const JWTStrategy = require('./config/tokens');
const cors = require('cors');

const passport = require('passport');
const app = express();
const port = 8080;
const environment = process.env.NODE_ENV || 'development';

app.use(cors());
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

database(config[environment]);
JWTStrategy();
Google();
passportConfig();

// console.log('1');
expressConfig(app, config[environment]);
// console.log('2');
routes(app);




app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
