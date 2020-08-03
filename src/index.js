const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/linhasController')(app);
require('./controllers/itinerarioController')(app);
require('./controllers/apisController')(app);
require('./controllers/filtroController')(app);
require('./controllers/taxiController')(app);

app.listen(3000);