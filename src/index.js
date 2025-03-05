// index.js
import { saludarCliente, obtenerCantidad, obtenerPrecio, calcularPrecioNeto, seleccionarEstado, obtenerImpuesto, calcularPrecioTotal, calcularTotalConDescuento} from './totalizador.js';

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
    const precioNeto = calcularPrecioNeto(cantidad, precio);

    // Mostrar el precio neto calculado
    document.getElementById("precioNeto").textContent = `Precio neto (${cantidad} * $${precio}): $${precioNeto}`;
});

// Seleccionar estado

document.getElementById("btnMostrarEstado").addEventListener("click", () => {
    const estadoSeleccionado = document.getElementById("estado").value;
    document.getElementById("estadoMostrado").textContent = seleccionarEstado(estadoSeleccionado);
});


// Obtener impuesto

document.getElementById("btnMostrarImpuesto").addEventListener("click", () => {
    const estadoSeleccionado = document.getElementById("estado").value;
    document.getElementById("impuestoMostrado").textContent = obtenerImpuesto(estadoSeleccionado);
});

// Mostrar precio total + impuesto del precio neto
document.getElementById("btnMostrarTotal").addEventListener("click", () => {
    const precioNeto = parseFloat(document.getElementById("precioNeto").value);
    const estadoSeleccionado = document.getElementById("estadoSeleccionado").value;

    if (isNaN(precioNeto) || precioNeto <= 0) {
        document.getElementById("precioTotal").textContent = "Error: El precio neto debe ser un número positivo.";
        return;
    }

    const resultado = calcularPrecioTotal(precioNeto, estadoSeleccionado);
    document.getElementById("precioTotal").textContent = resultado;
});

// Mostrar precio total con descuento aplicado
document.getElementById("btnMostrarTotalConDescuento").addEventListener("click", () => {
    const precioNeto = parseFloat(document.getElementById("precioNeto").textContent.split(": $")[1]);
    const estadoSeleccionado = document.getElementById("estadoSeleccionado").value;

    if (isNaN(precioNeto) || precioNeto <= 0) {
        document.getElementById("precioTotalConDescuento").textContent = "Error: El precio neto debe ser un número positivo.";
        return;
    }

    const resultadoConDescuento = calcularTotalConDescuento(precioNeto, estadoSeleccionado);
    document.getElementById("precioTotalConDescuento").textContent = resultadoConDescuento;
});
