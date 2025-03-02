import { saludarCliente, obtenerCantidad, obtenerPrecio, calcularPrecioNeto } from "./totalizador.js";

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