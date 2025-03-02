import { saludarCliente, obtenerCantidad } from "./totalizador.js";

test("Debe saludar al cliente con un mensaje de bienvenida", () => {
    const nombre = "Valeria";  // Aquí probamos con un nombre específico
    const resultado = saludarCliente(nombre);
    expect(resultado).toBe("¡Bienvenida, Valeria!");
});

test('Obtener cantidad ingresada', () => {
    expect(obtenerCantidad(20)).toBe("Cantidad de ítem: 20");
    expect(obtenerCantidad(5)).toBe("Cantidad de ítem: 5");
});
