import { saludarCliente, obtenerCantidad, obtenerPrecio, calcularPrecioNeto, seleccionarEstado, obtenerImpuesto } from "./totalizador.js";

test("Debe saludar al cliente con un mensaje de bienvenida", () => {
    const nombre = "Valeria";  // Aquí probamos con un nombre específico
    const resultado = saludarCliente(nombre);
    expect(resultado).toBe("¡Bienvenida, Valeria!");
});

test('Obtener cantidad ingresada', () => {
    expect(obtenerCantidad(20)).toBe("Cantidad de ítem: 20");
    expect(obtenerCantidad(5)).toBe("Cantidad de ítem: 5");
});

test('Obtener precio ingresado', () => {
    expect(obtenerPrecio(3)).toBe("Precio por ítem: $3");
    expect(obtenerPrecio(10)).toBe("Precio por ítem: $10");
});

test('Calcular precio neto', () => {
    expect(calcularPrecioNeto(20, 3)).toBe(60);
    expect(calcularPrecioNeto(5, 10)).toBe(50);
});

test("Debe mostrar el código de estado si es válido", () => {
    expect(seleccionarEstado("UT")).toBe("Estado seleccionado: UT");
    expect(seleccionarEstado("NV")).toBe("Estado seleccionado: NV");
    expect(seleccionarEstado("TX")).toBe("Estado seleccionado: TX");
    expect(seleccionarEstado("AL")).toBe("Estado seleccionado: AL");
    expect(seleccionarEstado("CA")).toBe("Estado seleccionado: CA");
});

test("Debe devolver el porcentaje de impuesto correcto según el estado", () => {
    expect(obtenerImpuesto("UT")).toBe("Impuesto en UT: 6.85%");
    expect(obtenerImpuesto("NV")).toBe("Impuesto en NV: 8%");
    expect(obtenerImpuesto("TX")).toBe("Impuesto en TX: 6.25%");
    expect(obtenerImpuesto("AL")).toBe("Impuesto en AL: 4%");
    expect(obtenerImpuesto("CA")).toBe("Impuesto en CA: 8.25%");
});