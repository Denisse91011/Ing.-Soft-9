import { saludarCliente } from "./totalizador.js";

document.getElementById("btnSaludar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const mensaje = saludarCliente(nombre);
    document.getElementById("mensajeSaludo").textContent = mensaje;
});

export function saludarCliente(nombre) {
    return `¡Bienvenida, ${nombre}!`;
}

