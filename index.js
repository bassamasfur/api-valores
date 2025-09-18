
const express = require('express');
require('dotenv').config();

const app = express();
const indicadoresRoutes = require('./routes/indicadores');

app.use('/api/indicadores', indicadoresRoutes);

app.get('/', (req, res) => {
	res.send('API Node.js funcionando en Vercel');
});

module.exports = app;
