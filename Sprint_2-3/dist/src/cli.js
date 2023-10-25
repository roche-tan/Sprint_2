import inquirer from "inquirer";
import { memoizedFactorial } from "./myFunction.js";
// -------------------- CLI TEST
// const answer = await inquirer.prompt([
//   {
//     type: "input",
//     name: "name",
//     message: "Cómo te llamas?",
//   },
// ]);
// console.log("Tu nombre es: " + answer.name);
// -------------------- CLI MEMOIZE
const runCLI = async () => {
    while (true) {
        const { number } = await inquirer.prompt([
            {
                type: "input",
                name: "number",
                message: "Enter a number to calculate its factorial (or 'exit' to exit): ",
            },
        ]);
        const input = number.toLowerCase();
        if (input === "exit") {
            console.log("Exiting program");
            break;
        }
        const num = parseInt(input, 10);
        if (!isNaN(num)) {
            // Verify if num is in cache
            const key = JSON.stringify([num]);
            if (memoizedFactorial.cache.has(key)) {
                const result = memoizedFactorial(num);
                console.log(`Found in cache: Factorial of ${num} is ${result}`);
            }
            else {
                // If not in cache
                const result = memoizedFactorial(num);
                console.log(`Not found in cache: Factorial of ${num} is ${result}`);
            }
        }
        else {
            console.log("Please enter a valid number.");
        }
    }
};
runCLI();
