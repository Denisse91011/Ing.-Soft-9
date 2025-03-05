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
    const valoresPermitidos = [3, 20]; // Solo permitimos estos valores
    if (!valoresPermitidos.includes(Number(precio))) {
        return "Error: Precio no permitido.";
    }
    return `Precio por ítem: $${precio}`;
}

// Función para calcular el precio neto
export function calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
}

// Funcion para seleccionar estado
export function seleccionarEstado(estado) {
    const estadosValidos = ["UT", "NV", "TX", "AL", "CA"];
    
    if (!estadosValidos.includes(estado)) {
        return "Error: Estado no válido.";
    }

    return `Estado seleccionado: ${estado}`;
}

// Funcion para ver el porcentaje de impuesto segun el estado

export function obtenerImpuesto(estado) {
    const impuestos = {
        "UT": 6.85,
        "NV": 8,
        "TX": 6.25,
        "AL": 4,
        "CA": 8.25
    };

    if (!impuestos.hasOwnProperty(estado)) {
        return "Error: Estado no válido.";
    }

    return `Impuesto en ${estado}: ${impuestos[estado]}%`;
}

export function calcularPrecioTotal(precioNeto, estado) {
    const impuestos = {
        "CA": 8.25, // Impuesto para California
        "AL": 4,
        "NV": 8,
        "UT": 6.85,
        "TX": 6.25

    };

    if (!impuestos.hasOwnProperty(estado)) {
        return "Error: Estado no válido.";
    }

    const porcentajeImpuesto = impuestos[estado] / 100;
    const precioTotal = precioNeto * (1 + porcentajeImpuesto);

    return `Precio total con impuesto (${estado}): $${precioTotal.toFixed(2)}`;
}


