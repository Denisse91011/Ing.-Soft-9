// index.js
import { saludarCliente, obtenerCantidad } from './totalizador.js';

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
