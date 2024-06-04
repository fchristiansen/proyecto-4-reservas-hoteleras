const express = require('express');
const bookingController = require('../controllers/controller');

const router = express.Router();

router.post('/reservas', bookingController.createBooking);
router.get('/reservas', bookingController.getBookings);
// router.get('/reservas/:id', bookingController.getBookingsById);
// router.put('/reservas/:id', bookingController.updateBookingById);
// router.delete('/reservas/:id', bookingController.deleteBookingById);

module.exports = router;
