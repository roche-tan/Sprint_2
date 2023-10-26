import inquirer from "inquirer";
import { throttle } from "./throttle_fn.js";
const askForInput = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "input",
            message: "Write a sentence and press 'Enter' to show: ",
        },
    ]);
};
let currentInput = "";
const displayInput = () => {
    console.log("Text recived: ", currentInput);
};
const throttleDisplay = throttle(displayInput, 8000);
const getInputAndDisplay = async () => {
    const answer = await askForInput();
    if (answer.input === "") {
        return;
    }
    currentInput = answer.input;
    throttleDisplay();
    // Llamar de nuevo a la función de manera recursiva después de mostrar el mensaje
    await getInputAndDisplay();
};
const runCLI = async () => {
    console.log("Welcome to the CLI. Press Enter with an empty message to exit.");
    await getInputAndDisplay();
};
runCLI();
// const runCLI = async () => {
//   console.log("Welcome to the CLI. Press Enter with an empty message to exit.");
//   while (true) {
//     const answer = await askForInput();
//     if (answer.input === "") {
//       break;
//     }
//     currentInput = answer.input;
//     throttleDisplay();
//   }
// };
// runCLI();
