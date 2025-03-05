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
    const valoresPermitidos = [3, 20, 10]; // Solo permitimos estos valores
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

// Funcion para calcular el precio total

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

// Funcion para calcular el precio total con descuento

export function calcularTotalConDescuento(precioNeto, estado) {
    const impuestos = {
        "CA": 8.25,
        "AL": 4,
        "NV": 8,
        "UT": 6.85,
        "TX": 6.25
    };

    const descuentos = [
        { limite: 1000, porcentaje: 3 },
        { limite: 3000, porcentaje: 5 },
        { limite: 7000, porcentaje: 7 },
        { limite: 10000, porcentaje: 10 },
        { limite: 30000, porcentaje: 15 }
    ];

    if (!impuestos.hasOwnProperty(estado)) {
        return "Error: Estado no válido.";
    }

    // Determinar el porcentaje de descuento
    let descuentoAplicado = 0;
    for (const descuento of descuentos) {
        if (precioNeto >= descuento.limite) {
            descuentoAplicado = descuento.porcentaje;
        }
    }

    const porcentajeDescuento = descuentoAplicado / 100;
    const precioConDescuento = precioNeto * (1 - porcentajeDescuento);
    const porcentajeImpuesto = impuestos[estado] / 100;
    const precioTotal = precioConDescuento * (1 + porcentajeImpuesto);

    return `Precio total con impuesto (${estado}) y descuento aplicado: $${precioTotal.toFixed(2)}`;
}

console.log(`Precio Neto: ${precioNeto}, Descuento: ${descuentoAplicado}%, Precio con Descuento: ${precioConDescuento}, Impuesto: ${porcentajeImpuesto}, Precio Total: ${precioTotal}`);





