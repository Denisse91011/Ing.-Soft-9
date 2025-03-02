import { saludarCliente } from "./totalizador.js";

test("Debe saludar al cliente con un mensaje de bienvenida", () => {
    const nombre = "Valeria";  // Aquí probamos con un nombre específico
    const resultado = saludarCliente(nombre);
    expect(resultado).toBe("¡Bienvenida, Valeria!");
});

import { calcularPrecioNeto } from "./totalizador.js";

test("Debe calcular el precio neto correctamente", () => {
    expect(calcularPrecioNeto(20, 3)).toBe(60);
    expect(calcularPrecioNeto(5, 10)).toBe(50);
    expect(calcularPrecioNeto(0, 10)).toBe(0);
});
