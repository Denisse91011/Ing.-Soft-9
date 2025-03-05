import { saludarCliente, obtenerCantidad, obtenerPrecio, calcularPrecioNeto, seleccionarEstado, obtenerImpuesto, calcularPrecioTotal, calcularTotalConDescuento } from "./totalizador.js";

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
    expect(obtenerPrecio(20)).toBe("Precio por ítem: $20");
    expect(obtenerPrecio(10)).toBe("Precio por ítem: $10");
});

test('Calcular precio neto', () => {
    expect(calcularPrecioNeto(20, 3)).toBe(60);
    expect(calcularPrecioNeto(20, 10)).toBe(200);
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

test("Debe calcular el precio total con el impuesto de CA correctamente", () => {
    expect(calcularPrecioTotal(100, "CA")).toBe("Precio total con impuesto (CA): $108.25");
    expect(calcularPrecioTotal(200, "CA")).toBe("Precio total con impuesto (CA): $216.50");
});

test("Debe calcular el precio total con el impuesto de AL correctamente", () => {
    expect(calcularPrecioTotal(100, "AL")).toBe("Precio total con impuesto (AL): $104.00");
    expect(calcularPrecioTotal(200, "AL")).toBe("Precio total con impuesto (AL): $208.00");
});

test("Debe calcular el precio total con el impuesto de NV correctamente", () => {
    expect(calcularPrecioTotal(100, "NV")).toBe("Precio total con impuesto (NV): $108.00");
    expect(calcularPrecioTotal(200, "NV")).toBe("Precio total con impuesto (NV): $216.00");
});

test("Debe calcular el precio total con el impuesto de UT correctamente", () => {
    expect(calcularPrecioTotal(100, "UT")).toBe("Precio total con impuesto (UT): $106.85");
    expect(calcularPrecioTotal(200, "UT")).toBe("Precio total con impuesto (UT): $213.70");
});

test("Debe calcular el precio total con el impuesto de TX correctamente", () => {
    expect(calcularPrecioTotal(100, "TX")).toBe("Precio total con impuesto (TX): $106.25");
    expect(calcularPrecioTotal(200, "TX")).toBe("Precio total con impuesto (TX): $212.50");
});

// Precio total mas descuento

test("Debe calcular el total para CA con diferentes valores", () => {
    expect(calcularTotalConDescuento(1000, "CA")).toBe("Precio total con impuesto (CA) y descuento aplicado: $104.00");
    expect(calcularTotalConDescuento(3000, "CA")).toBe("Precio total con impuesto (CA) y descuento aplicado: $246.38");
});

test("Debe calcular el total para AL con diferentes valores", () => {
    expect(calcularTotalConDescuento(1000, "AL")).toBe("Precio total con impuesto (AL) y descuento aplicado: $103.68");
    expect(calcularTotalConDescuento(3000, "AL")).toBe("Precio total con impuesto (AL) y descuento aplicado: $246.00");
});

test("Debe calcular el total para NV con diferentes valores", () => {
    expect(calcularTotalConDescuento(1000, "NV")).toBe("Precio total con impuesto (NV) y descuento aplicado: $103.92");
    expect(calcularTotalConDescuento(3000, "NV")).toBe("Precio total con impuesto (NV) y descuento aplicado: $246.00");
});

test("Debe calcular el total para UT con diferentes valores", () => {
    expect(calcularTotalConDescuento(1000, "UT")).toBe("Precio total con impuesto (UT) y descuento aplicado: $103.91");
    expect(calcularTotalConDescuento(3000, "UT")).toBe("Precio total con impuesto (UT) y descuento aplicado: $246.29");
});

test("Debe calcular el total para TX con diferentes valores", () => {
    expect(calcularTotalConDescuento(1000, "TX")).toBe("Precio total con impuesto (TX) y descuento aplicado: $103.75");
    expect(calcularTotalConDescuento(3000, "TX")).toBe("Precio total con impuesto (TX) y descuento aplicado: $246.09");
});