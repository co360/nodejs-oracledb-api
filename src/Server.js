const express = require('express');
const routes = require('./Routes.js')

const app = express();
app.use(express.json());

app.use('/api', routes);

app.listen(3001);
