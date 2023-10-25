import { memoizedFactorial } from "./myFunction.js";
// HTML
const resultElement = document.getElementById("result");
const numberInput = document.getElementById("numberInput");
const calculateButton = document.getElementById("btn");
if (resultElement && numberInput && calculateButton) {
    calculateButton.addEventListener("click", () => {
        const num = parseInt(numberInput.value, 10);
        if (!isNaN(num)) {
            // Verify if num is in cache
            const key = JSON.stringify([num]);
            if (memoizedFactorial.cache.has(key)) {
                const result = memoizedFactorial(num);
                resultElement.textContent = `Encontrado en el cache: Factorial de ${num} es ${result}`;
            }
            else {
                // If not in cache
                const result = memoizedFactorial(num);
                resultElement.textContent = `No encontrado en el cache: Factorial de ${num} es ${result}`;
            }
            // Clear input after calculation
            numberInput.value = "";
        }
        else {
            resultElement.textContent = "Entra un número valido";
        }
    });
}
