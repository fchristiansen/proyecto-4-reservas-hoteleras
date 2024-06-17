const Booking = require('../models/model');
const moment = require('moment');

let bookings = [];
const reservaciones = ' reservaciones';

// a. Crear reserva

exports.createBooking = async (req, res) => {
	const { hotel, tipo_habitacion, estado_reserva, num_huespedes, fecha_creacion } = req.body;
	const fechaCreacion = fecha_creacion && fecha_creacion.trim() !== '' ? moment(fecha_creacion) : moment();
	const newBooking = new Booking(bookings.length + 1, hotel, tipo_habitacion, estado_reserva, num_huespedes, fechaCreacion);

	bookings.push(newBooking);
	res.json({
		msg: 'Reserva creada con éxito',
		data: newBooking,
	});
};
//  b. Obtener la lista de reservas

exports.getBookings = async (req, res) => {
	const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado_reserva, num_huespedes } = req.query;
	// filtrar reservas por nombre de hotel
	if (hotel) {
		const hotelsFiltered = bookings.filter((booking) => booking.hotel === hotel);
		if (hotelsFiltered.length === 0) {
			return res.status(404).json({ msg: 'No se encontraron hoteles.' });
		}

		return res.json({
			msg: 'Nombre hotel:',
			data: hotelsFiltered,
		});
		// filtrar reservas por rango de fecha
	} else if (fecha_inicio && fecha_fin) {
		const startDate = moment(fecha_inicio);
		const endDate = moment(fecha_fin);

		const bookingsFiltered = bookings.filter((booking) => {
			const fechaCreacion = moment(booking.fecha_creacion);
			return fechaCreacion.isBetween(startDate, endDate, null, '[]');
		});

		if (bookingsFiltered.length === 0) {
			return res.status(404).json({ msg: 'No se encontraron reservas.' });
		}

		return res.json({
			msg: 'Reservas por fecha:',
			data: bookingsFiltered,
		});
		// filtrar reservas por tipo de habitacion (single, doble, matrimonial, familiar, etc)
	} else if (tipo_habitacion) {
		const roomsFiltered = bookings.filter((booking) => booking.tipo_habitacion === tipo_habitacion);
		if (roomsFiltered.length === 0) {
			return res.status(404).json({ msg: `No se encontraron habitaciones del tipo: ${tipo_habitacion}` });
		}
		return res.json({
			msg: 'Tipos de habitación:',
			data: roomsFiltered,
		});
		// filtrar reservas estado de reserva: reservada, cancelada, pendiente, pagada, etc.
	} else if (estado_reserva) {
		const reservationStatusFiltered = bookings.filter((booking) => booking.estado_reserva === estado_reserva);
		if (reservationStatusFiltered.length === 0) {
			return res.status(404).json({ msg: `No se encontraron reservas con el estado: ${estado_reserva}` });
		}
		return res.json({
			msg: 'Estado de reserva:',
			data: reservationStatusFiltered,
		});
		// filtrar reservas con más de 5 huéspedes
	} else if (num_huespedes) {
		const numGuests = parseInt(num_huespedes);
		const numGuestsFiltered = bookings.filter((booking) => booking.num_huespedes > numGuests);

		if (numGuestsFiltered.length === 0) {
			return res.status(404).json({ msg: `No se encontraron reservas con más de ${numGuests} huéspedes.` });
		}
		return res.json({
			msg: `Reservas con más de ${numGuests} huéspedes:`,
			data: numGuestsFiltered,
		});
	} else if (bookings.length === 0) {
		// mostrar que no hay reservas
		return res.json({
			msg: 'No se encontraron reservas.',
			data: bookings,
		});
	} else {
		// mostrar todas las reservas
		return res.json({
			msg: `Hay ${bookings.length > 1 ? bookings.length + reservaciones : bookings.length + ' reserva.'}`,
			data: bookings,
		});
	}
};

// Obtener información de una reserva específica:

exports.getBookingsById = async (req, res) => {
	const bookingId = parseInt(req.params.id);
	const booking = bookings.find((booking) => booking.id === bookingId);

	if (!booking) {
		return res.status(404).json({ msg: `No se encontraron reservas con el id: ${bookingId}` });
	}

	return res.json({
		msg: 'Reserva obtenida con éxito.',
		data: booking,
	});
};

// Actualizar información de una reserva específica:

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
