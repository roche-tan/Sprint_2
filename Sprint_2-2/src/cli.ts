import inquirer from "inquirer";
import { throttle } from "./throttle_fn.js";

const askForInput = async () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "input",
      message: "Write a sentence and press 'Enter' to show: ",
    },
  ]);
};

let currentInput = "";

// displays user text
const displayInput = () => {
  console.log("Text recived: ", currentInput);
};

const throttleDisplay = throttle(displayInput, 1500);

const getInputAndDisplay = async () => {
  const answer = await askForInput();

  // if user sends empty string
  if (answer.input === "") {
    return;
  }
// if input has been recived, we update currentInput
  currentInput = answer.input;

  // we call throttleDisplay to display the input, respecting the time limit. 
  await throttleDisplay();

  // we call the function getInputAndDisplay so user can write another text 
  await getInputAndDisplay();
};

// starts the CLI
const runCLI = async () => {
  console.log("Welcome to the CLI. Press Enter with an empty message to exit.");
  await getInputAndDisplay();
};

runCLI();
