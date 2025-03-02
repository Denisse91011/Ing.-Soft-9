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

// Función para obtener el precio ingresado
export function obtenerPrecio(precio) {
    const valoresPermitidos = [3, 10]; // Solo permitimos estos valores
    if (!valoresPermitidos.includes(Number(precio))) {
        return "Error: Precio no permitido.";
    }
    return `Precio por ítem: $${precio}`;
}




