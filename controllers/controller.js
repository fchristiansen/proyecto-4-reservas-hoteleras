const Booking = require('../models/model');
const moment = require('moment');

let bookings = [];

// crear reserva
exports.createBooking = async (req, res) => {
	const { hotel, tipo_habitacion, estado_reserva, num_huespedes } = req.body;
	const newBooking = new Booking(bookings.length + 1, hotel, tipo_habitacion, estado_reserva, num_huespedes, moment());

	bookings.push(newBooking);

	res.json({
		msg: 'Reserva creada con éxito',
		data: newBooking,
	});
};

// obtener la lista de todas las reservas

exports.getBookings = async (req, res) => {
	const { estado_reserva } = req.query;

	if (estado_reserva) {
		const allBookingsList = bookings.filter((booking) => booking.estado_reserva === estado_reserva);
		if (allBookingsList.length === 0) {
			return res.status(404).json({ msg: 'No se encontraron reservas' });
		}

		return res.json({
			msg: 'Lista de Reservas',
			data: allBookingsList,
		});
	}

	return res.json({
		msg: 'Lista de todas las Reservas',
		data: bookings,
	});
};
