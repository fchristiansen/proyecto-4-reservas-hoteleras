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
 *          description: El identificador único de una reserva.
 *        hotel:
 *          type: string
 *          description: El nombre del hotel.
 *        tipo_habitacion:
 *          type: string
 *          description: Tipo de la habitación (vip, matrimonial, single, doble, familiar, etc).
 *        estado_reserva:
 *          type: string
 *          description: El estado de la reserva (reservada, pendiente, cancelada, pagada, etc)
 *        num_huespedes:
 *          type: integer
 *          description: El número de huéspedes por habitación.
 *        fecha_creacion:
 *          type: string
 *          description: La fecha de reserva. Si está como un string vacío (""), se reserva con la fecha actual.
 *      required:
 *        - hotel
 *        - tipo_habitacion
 *        - estado_reserva
 *        - num_huespedes
 *        - fecha_creacion
 *      example:
 *        hotel: "Hotel Paraíso"
 *        tipo_habitacion: "familiar"
 *        estado_reserva: "confirmada"
 *        num_huespedes: 3
 *        fecha_creacion: "2024-12-23"
 */

/**
 * @swagger
 * tags:
 *  name: Reservas
 *  description: API para la gestión de reservas
 */

// a. Crear Reserva
/**
 * @swagger
 * /api/reservas:
 *  post:
 *    summary: Crear una nueva reserva.
 *    tags: [Reservas]
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
 *    summary: Obtener la lista de reservas.
 *    tags: [Reservas]
 *    parameters:
 *      - in: query
 *        name: hotel
 *        schema:
 *          type: string
 *        description: El nombre del hotel
 *      - in: query
 *        name: tipo_habitacion
 *        schema:
 *          type: string
 *        description: El tipo de habitación (vip, matrimonial, single, etc.)
 *      - in: query
 *        name: fecha_creacion
 *        schema:
 *          type: string
 *        description: la fecha de la reserva
 *      - in: query
 *        name: estado_reserva
 *        schema:
 *          type: string
 *        description: El estado de la reserva (cancelada, confirmada, pendiente, etc.)
 *      - in: query
 *        name: num_huespedes
 *        schema:
 *          type: integer
 *        description: El número de huéspedes en la reserva.
 *    responses:
 *      200:
 *        description: Una lista de reservas que coinciden con la búsqueda.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Booking'
 *      404:
 *        description: Reserva no encontrada.
 */
router.get('/reservas', bookingController.getBookings);

// c. Obtener información de una reserva específica
/**
 * @swagger
 * /api/reservas/{id}:
 *  get:
 *    summary: Obtener información de una reserva específica.
 *    tags: [Reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: El identificador único de la reserva.
 *    responses:
 *      200:
 *        description: Información de una reserva específica
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Booking'
 *      404:
 *        description: Reserva no encontrada.
 */
router.get('/reservas/:id', bookingController.getBookingsById);

// d. Actualizar información de un pedido específico
/**
 * @swagger
 * /api/reservas/{id}:
 *  put:
 *    summary: Actualización de una reserva específica.
 *    tags: [Reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: El identificador único de la reserva.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Booking'
 *    responses:
 *      200:
 *        description: Reserva actualizada con éxito.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Booking'
 *      404:
 *        description: Reserva no encontrada.
 */
router.put('/reservas/:id', bookingController.updateBookingById);

// e. Eliminar una reserva específica
/**
 * @swagger
 * /api/reservas/{id}:
 *  delete:
 *    summary: Eliminar una reserva específica.
 *    tags: [Reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: El identificador único de la reserva.
 *    responses:
 *      200:
 *        description: Reserva eliminada con éxito.
 *      404:
 *        description: Reserva no encontrada.
 */
router.delete('/reservas/:id', bookingController.deleteBookingById);

module.exports = router;
