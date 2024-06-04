require('dotenv').config();
const express = require('express');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', bookingRoutes);

app.listen(port, () => {
	console.log('Servidor iniciado en el puerto ' + port);
});
