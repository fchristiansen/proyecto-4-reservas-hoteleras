require('dotenv').config();
const express = require('express');
const cors = require('cors');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const bookingRoutes = require('./routes/bookingRoutes');
const path = require('path'); // path para trabajar con rutas de archivos y directorios
const app = express();
const port = process.env.PORT || 3000;
const serverUrl = process.env.SERVER_URL || `http://localhost:${port}`;
//  Opciones swaggerJsDoc
const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'API para le gestión de reservas hoteleras.',
			version: '1.0.0',
		},

		servers: [
			{
				url: serverUrl,
			},
		],
	},
	/*
		Ruta de los archivos donde se buscarán los comentarios
		para generar la documentación
	*/

	apis: [path.join(__dirname, './routes/*.js')],
};

// Generamos la documentación de la API
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', bookingRoutes);

// Servimos la interfaz de usuario de Swagger con la documentación
// generada en la ruta raíz
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(port, () => {
	console.log('Servidor iniciado en el puerto ' + port);
});
