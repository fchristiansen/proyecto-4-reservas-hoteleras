const Booking = require('../models/model');
const moment = require('moment');

let bookings = [];

// Crear reserva

exports.createBooking = async (req, res) => {
	const { hotel, tipo_habitacion, estado_reserva, num_huespedes, fecha_creacion } = req.body;
	const fechaCreacion = fecha_creacion ? moment(fecha_creacion) : moment();
	const newBooking = new Booking(bookings.length + 1, hotel, tipo_habitacion, estado_reserva, num_huespedes, fechaCreacion);
	bookings.push(newBooking);
	res.json({
		msg: 'Reserva creada con éxito',
		data: newBooking,
	});
};

// Obtener la lista de reservas y la lista segun parámetro de consulta

exports.getBookings = async (req, res) => {
	const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado_reserva, num_huespedes } = req.query;

	if (hotel) {
		const hotelsFiltered = bookings.filter((booking) => booking.hotel === hotel);
		if (hotelsFiltered.length === 0) {
			return res.status(404).json({ msg: 'No se encontraron hoteles.' });
		}

		return res.json({
			msg: 'Nombre hotel:',
			data: hotelsFiltered,
		});
	} else if (fecha_inicio && fecha_fin) {
		const startDate = moment(fecha_inicio);
		const endDate = moment(fecha_fin);

		const bookingsFiltered = bookings.filter((booking) => booking.fechaCreacion.isBetween(startDate, endDate) === true);
		if (bookingsFiltered.length === 0) {
			return res.status(404).json({ msg: 'No se encontraron reservas.' });
		}

		return res.json({
			msg: 'Reservas por fecha:',
			data: bookingsFiltered,
		});
	} else if (tipo_habitacion) {
		const roomsFiltered = bookings.filter((booking) => booking.tipo_habitacion === tipo_habitacion);
		if (roomsFiltered.length === 0) {
			return res.status(404).json({ msg: `No se encontraron habitaciones del tipo: ${tipo_habitacion}` });
		}
		return res.json({
			msg: 'Tipos de habitación:',
			data: roomsFiltered,
		});
	} else if (num_huespedes) {
		const bookingsFiltered = bookings.filter((booking) => booking.num_huespedes > 5);
		if (bookingsFiltered.length === 0) {
			return res.status(404).json({ msg: `No se encontraron reservas con más de 5 huéspedes.` });
		}
		return res.json({
			msg: 'Reservas con más de 5 huéspedes:',
			data: bookingsFiltered,
		});
	} else {
		return res.json({
			msg: 'Todas las reservas:',
			data: bookings,
		});
	}
};

// Obtener información de una reserva específica

exports.getBookingsById = async (req, res) => {
	const bookingId = parseInt(req.params.id);
	const booking = bookings.find((booking) => booking.id === bookingId);

	if (!booking) {
		return res.status(404).json({ msg: `No se encontraron reservas con el id: ${bookingId}` });
	}

	return res.json({
		msg: 'Reserva obtenida.',
		data: booking,
	});
};

// Actualizar información de una reserva.

exports.updateBookingById = async (req, res) => {
	const bookingId = parseInt(req.params.id);
	const bookingIndex = bookings.findIndex((booking) => booking.id === bookingId);

	if (bookingIndex === -1) {
		return res.status(404).json({ msg: `No se encontraron reservas con el id: ${bookingId}` });
	}
	bookings[bookingIndex] = { ...bookings[bookingIndex], ...req.body };

	return res.json({
		msg: 'Reserva actualizada con éxito.',
		data: bookings[bookingIndex],
	});
};

// Eliminar una reserva específica:

exports.deleteBookingById = async (req, res) => {
	const bookingId = parseInt(req.params.id);
	const bookingIndex = bookings.findIndex((booking) => booking.id === bookingId);

	if (bookingIndex === -1) {
		return res.status(404).json({ msg: `No se encontraron reservas con el id: ${bookingId}` });
	}

	bookings.splice(bookingIndex, 1);

	return res.json({ msg: 'Reserva eliminada con éxito.' });
};
