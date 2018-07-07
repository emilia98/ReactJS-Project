const express = require('express');
const config = require('./config/config');
const expressConfig = require('./config/express');
const routes = require('./routes/routes');
const database = require('./config/database');
const passportConfig = require('./config/passport');
const cors = require('cors');

const app = express();
const port = 8080;
const environment = process.env.NODE_ENV || 'development';

app.use(cors());
database(config[environment]);
passportConfig();
expressConfig(app, config[environment]);
routes(app);



app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
