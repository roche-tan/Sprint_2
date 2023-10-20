// Archivo para HTML

import { debounce } from "./debounce_fn.js";
// const debounce = require("./index");

// Tu función a la que deseas aplicar debounce
const myFunction = (input: string) => {
  console.log(`Input recibido: ${input}`);
};

// Aplicar debounce a la función
const debouncedFunction1 = debounce(myFunction, 2000, false);
const debouncedFunction2 = debounce(myFunction, 4000, false);

// Llamar a la función debounced
debouncedFunction1("Ejemplo de entrada 1");
debouncedFunction2("Ejemplo de entrada 2");
