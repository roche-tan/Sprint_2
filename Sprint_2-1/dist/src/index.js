// const inquirer = require("inquirer");
import inquirer from "inquirer";
import { debounce } from "./debounce_fn.js";
// -------------------- CLI TEST
// const answer = await inquirer.prompt([
//   {
//     type: "input",
//     name: "name",
//     message: "Cómo te llamas?",
//   },
// ]);
// console.log("Tu nombre es: " + answer.name);
// -------------------- CLI DEBOUNCE
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Cómo te llamas?",
    },
]);
const debounceFunction = debounce((input) => {
    console.log(`Debounced Input: ${input}`);
}, 2000);
debounceFunction(answer.name);
