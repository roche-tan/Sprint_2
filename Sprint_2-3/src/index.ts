import inquirer from "inquirer";
import { memoizedFactorial } from "./myFunction";

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
        message:
          "Enter a number to calculate its factorial (or 'exit' to exit): ",
      },
    ]);

    const input = number.toLowerCase();

    if (input === "exit") {
      console.log("Exiting program");
      break;
    }

    const num = parseInt(input, 10);

    if (!isNaN(num)) {
      const result = memoizedFactorial(num);
      console.log(`Factorial of ${num} is ${result}`);
    } else {
      console.log("Please enter a valid number.");
    }
  }
};

runCLI();
