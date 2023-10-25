import inquirer from "inquirer";
import { memoize } from "./memoize-fn";

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

const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

const memoizedFactorial = memoize(factorial);

const promtQuestions = await inquirer.prompt([
  {
    type: "input",
    name: "number",
    message:
      "Enter the number to check the factorial or 'cancel' to cancel CLI: ",
  },
]);

const runCLI = async () => {
  while (true) {
    const answers: { number: string } = promtQuestions;
    const input: string = answers.number;

    if (input.toLocaleLowerCase() === "exit") {
      console.log("Exiting program");
      break;
    }

    const number: number = parseInt(input, 10);

    if (!isNaN(number)) {
      const result: number = memoizedFactorial(number);
      console.log(`Factorial of ${number} is ${result}`);
    } else {
      console.log(`Please enter a valid number`);
    }
  }
};
runCLI();
