import { saludarCliente } from "./totalizador.js";

test("Debe saludar al cliente con un mensaje de bienvenida", () => {
    expect(saludarCliente("Valeria")).toBe("¡Bienvenida, Valeria!");
});
