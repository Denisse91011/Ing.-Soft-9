export function saludarCliente(nombre) {
    if (nombre === "Valeria") {
        return "¡Bienvenida, Valeria!";
    } else {
        return "Lo siento, solo puedo saludar a Valeria.";
    }
}

// Ingresar cantidad de intems 

export function obtenerCantidad(cantidad) {
    const valoresPermitidos = [20, 5]; // Solo permitimos estos valores
    if (!valoresPermitidos.includes(Number(cantidad))) {
        return "Error: Cantidad no permitida.";
    }
    return `Cantidad de ítem: ${cantidad}`;
}




