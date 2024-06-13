// librerias
const express = require('express');
const router = express.Router();
// controlador de reservas
const bookingController = require('../controllers/controller');

// Definimos la especificación de Swagger para la entidad Reserva
/**
 * @swagger
 * components:
 *  schemas:
 *    Reserva: { ... }
 */

// Endpoint para crear una Reserva
/**
 * @swagger
 * /api/reservas:
 *  post:
 *    ...
 */
router.post('/reservas', bookingController.createBooking);
// Endpoint para obtener la lista de reservas
/**
 * @swagger
 * /api/reservas:
 *  get:
 *    ...
 */
router.get('/reservas', bookingController.getBookings);
// Endpoint para obtener información de una reserva específica
/**
 * @swagger
 * /api/reservas/{id}:
 *  get:
 *    ...
 */
router.get('/reservas/:id', bookingController.getBookingsById);
// Endpoint para actualizar una Reserva específica
/**
 * @swagger
 * /api/reservas/{id}:
 *  put:
 *    ...
 */
router.put('/reservas/:id', bookingController.updateBookingById);

// Endpoint para eliminar una reserva específica
/**
 * @swagger
 * /api/reservas/{id}:
 *  delete:
 *    ...
 */
router.delete('/reservas/:id', bookingController.deleteBookingById);

module.exports = router;
