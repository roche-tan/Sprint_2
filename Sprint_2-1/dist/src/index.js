// const inquirer = require("inquirer");
import inquirer from "inquirer";
// -------------------- CLI TEST
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Cómo te llamas?",
    },
]);
console.log("Tu nombre es: " + answer.name);
