// index.js
import { saludarCliente, calcularPrecioNeto } from './totalizador.js';

// Saludo
document.getElementById("btnSaludar").addEventListener("click", () => {
    const nombre = document.getElementById("nombreCliente").value;
    const mensaje = saludarCliente(nombre);
    document.getElementById("mensajeSaludo").textContent = mensaje;
});

// Mostrar cantidad
document.getElementById("btnMostrarCantidad").addEventListener("click", () => {
    const cantidad = document.getElementById("cantidad").value;
    document.getElementById("cantidadMostrada").textContent = `Cantidad de ítem: ${cantidad}`;
});

