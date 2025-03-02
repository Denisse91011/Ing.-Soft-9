export function saludarCliente(nombre) {
    if (nombre === "Valeria") {
        return "¡Bienvenida, Valeria!";
    } else {
        return "Lo siento, solo puedo saludar a Valeria.";
    }
}

export function calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
}

// Mover la lógica de la interacción con el DOM aquí
export function manejarEventos() {
    // Mostrar cantidad ingresada
    document.getElementById("btnMostrarCantidad").addEventListener("click", () => {
        const cantidad = document.getElementById("cantidad").value;
        document.getElementById("cantidadMostrada").textContent = `Cantidad de item: ${cantidad}`;
    });

}
