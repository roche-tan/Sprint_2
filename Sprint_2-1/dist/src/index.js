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
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Cómo te llamas?",
    },
    {
        type: "input",
        name: "color",
        message: "Cuál es tu color favorito?",
    },
]);
// Will show console log after 2000ms
const debounceFunction = debounce((name, color) => {
    console.log(`Nombre: ${name}`);
    console.log(`Color: ${color}`);
}, 2000);
debounceFunction(answers.name, answers.color);
