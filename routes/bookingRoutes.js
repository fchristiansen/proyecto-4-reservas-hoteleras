// librerias
const express = require('express');
const router = express.Router();
// controlador de reservas
const bookingController = require('../controllers/controller');

/**
 * @swagger
 * components:
 *  schemas:
 *    Booking:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The Booking's unique identifier
 *        hotel:
 *          type: string
 *          description: The name of the Hotel
 *        tipo_habitacion:
 *          type: string
 *          format: date
 *          description: The date of the Booking
 *        estado_reserva:
 *          type: string
 *          description: The Booking's status
 *        num_huespedes:
 *          type: number
 *          description: The price of the Bookinged item
 *        fecha_creacion:
 *          type: integer
 *          description: The quantity of the Bookinged item
 *
 *      required:
 *
 *        - hotel
 *        - tipo_habitacion
 *        - estado_reserva
 *        - num_huespedes
 *        - fecha_creacion
 *
 *      example:
*
*          hotel: "Hotel Paraíso"
*          tipo_habitacion: "familiar"
*          estado_reserva: "confirmada"
*          num_huespedes: 3
*          fecha_creacion: "2024-12-23"
 *
 *

 */

// a. Crear Reserva
/**
 * @swagger
 * /api/reservas:
 *  post:
 *    summary: Create a new booking
 *    tags: [Bookings]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Booking'
 *    responses:
 *      200:
 *        description: Reserva creada con éxito.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Booking'
 */
router.post('/reservas', bookingController.createBooking);

// b. Obtener la lista de reservas
/**
 * @swagger
 * /api/reservas:
 *  get:
 *    summary: Get the list of bookings
 *    tags: [Bookings]
 *    responses:
 *      200:
 *        description: A list of bookings
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Booking'
 */

router.get('/reservas', bookingController.getBookings);

// c. Obtener información de una reserva específica
/**
 * @swagger
 * /api/reservas/{id}:
 *  get:
 *    summary: Get information of a specific booking
 *    tags: [Bookings]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The booking's unique identifier
 *    responses:
 *      200:
 *        description: Information of the specific booking
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Booking'
 *      404:
 *        description: Booking not found
 */

router.get('/reservas/:id', bookingController.getBookingsById);

router.put('/reservas/:id', bookingController.updateBookingById);

router.delete('/reservas/:id', bookingController.deleteBookingById);

module.exports = router;
