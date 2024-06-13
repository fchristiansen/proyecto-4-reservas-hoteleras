# PROYECTO 4: Reservas Hoteleras

1. Aplicación para la gestión de reservas en hoteles: <br>
   Involucra 4 operaciones **CRUD** y otras 6 adicionales relacionadas con filtros, utilizando **Node.js** y **Express**.

2. Opcionalmente, realizar un proceso de investigación relacionado con la documentación de API, usando **Swagger**, con la estandarización **OPENAPI**, la cual se utiliza en equipos internacionales para construir servicios escalables.

---

## REQUISITOS:

Requisitos y entregables

#### GENERAL

-   [ ] Realizarse de manera individual

#### ARQUITECTURA DE CARPETAS

-   [ ] Crear una arquitectura de carpetas y archivos, clara

#### APLICACIÓN DE SERVICIOS CRUD

-   [ ] Permitir la creación de reservas con los detalles necesarios (por ejemplo, hotel, tipo de habitación, número de huéspedes, fechas, etc.).
-   [ ] Permitir la visualización de la lista de reservas.
-   [ ] Permitir la obtención de la información de una reserva específica.
-   [ ] Permitir la actualización de la información de una reserva.
-   [ ] Permitir la eliminación de una reserva.
-   [ ] Permitir la búsqueda de reservas por hotel, rango de fechas, tipo de habitación, estado y número de huéspedes.
-   [ ] Almacenar los datos de las reservas en una estructura de datos.

#### CONTROL DE VERSIONES

-   [ ] Crear un repositorio en GitHub y subir el proyecto al mismo.

#### ENTREGA A TIEMPO

-   [ ] Entregar a tiempo el proyecto.

#### DOCUMENTACIÓN DE LA API (OPCIONAL)

-   [ ] Documentar todos los `endpoints` utilizando `Swagger` y `OpenAPI`

#### DESPLIEGUE (OPCIONAL)

-   [ ] Crear una URL de producción para este proyecto, a través de [render.com](https://render.com)

## Ejemplos de reservas

---

```
Reserva con fecha:
{
  "hotel": "Hotel Paraíso",
  "tipo_habitacion": "familiar",
  "estado_reserva": "confirmada",
  "num_huespedes": 3,
  "fecha_creacion": "2024-12-23"
}

Reserva sin fecha de creación:
(Se crea con la fecha actual)

{
  "hotel": "Hotel Paraíso",
  "tipo_habitacion": "matrimonial",
  "estado_reserva": "cancelada",
  "num_huespedes": 2
}

{
  "hotel": "Valle Nevado",
  "tipo_habitacion": "single",
  "estado_reserva": "pendiente",
  "num_huespedes": 1
}

{
  "hotel": "Hotel Paraíso",
  "tipo_habitacion": "vip",
  "estado_reserva": "disponible",
  "num_huespedes": 1
}

{
  "hotel": "Hotel Pucón",
  "tipo_habitacion": "vip",
  "estado_reserva": "disponible",
  "num_huespedes": 2
}

Reservas con más de 5 huéspedes:

{
  "hotel": "Hotel Paraíso",
  "tipo_habitacion": "familiar",
  "estado_reserva": "pendiente",
  "num_huespedes": 5
}

{
  "hotel": "Hotel Paraíso",
  "tipo_habitacion": "familiar",
  "estado_reserva": "cancelada",
  "num_huespedes": 5
}

{
  "hotel": "Hotel Paraíso",
  "tipo_habitacion": "familiar",
  "estado_reserva": "disponible",
  "num_huespedes": 8
}

```
