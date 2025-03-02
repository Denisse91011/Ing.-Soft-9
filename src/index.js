// index.js
import { saludarCliente, obtenerCantidad, obtenerPrecio, calcularPrecioNeto, seleccionarEstado } from './totalizador.js';

// Saludo
document.getElementById("btnSaludar").addEventListener("click", () => {
    const nombre = document.getElementById("nombreCliente").value;
    const mensaje = saludarCliente(nombre);
    document.getElementById("mensajeSaludo").textContent = mensaje;
});

// Manejo de la cantidad
document.getElementById("btnMostrarCantidad").addEventListener("click", () => {
    const cantidad = document.getElementById("cantidad").value;
    document.getElementById("cantidadMostrada").textContent = obtenerCantidad(cantidad);
});

// Manejo del precio
document.getElementById("btnMostrarPrecio").addEventListener("click", () => {
    const precio = document.getElementById("precio").value;
    document.getElementById("precioMostrado").textContent = obtenerPrecio(precio);
});

// Totalización
document.getElementById("btnTotalizar").addEventListener("click", () => {
    const cantidad = Number(document.getElementById("cantidad").value);
    const precio = Number(document.getElementById("precio").value);
    document.getElementById("precioNeto").textContent = `Precio neto (${cantidad} * $${precio}): $${calcularPrecioNeto(cantidad, precio)}`;
});

// Seleccionar estado

document.getElementById("btnMostrarEstado").addEventListener("click", () => {
    const estadoSeleccionado = document.getElementById("estado").value;
    document.getElementById("estadoMostrado").textContent = seleccionarEstado(estadoSeleccionado);
});
