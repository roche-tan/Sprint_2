// Aquí es donde puedes definir cómo tu CLI se ejecuta desde la línea de comandos.

// export {};

// const inquirer = require("inquirer");
// // import { debounce } from "../src/index";

// // -------------------- CLI TEST
// const answer = await inquirer.prompt([
//   {
//     type: "input",
//     name: "name",
//     message: "Cómo te llamas?",
//   },
// ]);

// console.log("Tu nombre es: " + answer.name);

// -------------------- CLI DEBOUNCE

// const answer = await inquirer.prompt([
//   {
//     type: "input",
//     name: "name",
//     message: "Cómo te llamas?",
//   },
// ]);

// const debounceFunction = debounce((input: string) => {
//   console.log(`Debounced Input: ${input}`);
// }, 500);

// const runDebouncer = () => {
//   inquirer.prompt(answer).then((answers: any) => {
//     debounceFunction(answers.input);
//     runDebouncer;
//   });
// };

// console.log("CLI de Debouncing");
// runDebouncer();
