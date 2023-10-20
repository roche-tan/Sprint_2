// Archivo para HTML
import { debounce } from "./debounce_fn";
// const debounce = require("./index");
// Tu función a la que deseas aplicar debounce
const myFunction = (input) => {
    console.log(`Input recibido de mi función: ${input}`);
};
// Aplicar debounce a la función
const debouncedFunction = debounce(myFunction, 500, false);
// Llamar a la función debounced
debouncedFunction("Ejemplo de entrada 1"); // Se ejecutará después de 500 ms.
debouncedFunction("Ejemplo de entrada 2");
