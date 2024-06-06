class Booking {
	constructor(id, hotel, tipo_habitacion, estado_reserva, num_huespedes, fecha_creacion) {
		this.id = id;
		this.hotel = hotel;
		this.tipo_habitacion = tipo_habitacion;
		this.estado_reserva = estado_reserva;
		this.num_huespedes = num_huespedes;
		this.fecha_creacion = fecha_creacion;
	}
}

module.exports = Booking;
