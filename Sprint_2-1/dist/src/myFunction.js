// To connect with HTML
import { debounce } from "./debounce_fn.js";
// const debounce = require("./index");
// Function to apply to debounce
const myFunction = (input) => {
    console.log(`Input recibido: ${input}`);
};
// Apply debounce to the función
const debouncedFunction1 = debounce(myFunction, 2000, false);
const debouncedFunction2 = debounce(myFunction, 4000, false);
// Call debounce function
debouncedFunction1("Ejemplo de entrada 1");
debouncedFunction2("Ejemplo de entrada 2");
