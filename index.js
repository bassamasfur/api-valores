const express = require('express');
require('dotenv').config();

const app = express();
const indicadoresRoutes = require('./routes/indicadores');

app.use('/api/indicadores', indicadoresRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ API corriendo en puerto ${PORT}`));
