import { throttle } from "./throttle_fn.js";

// HTML

const input: HTMLInputElement = document.getElementById(
  "inputText"
) as HTMLInputElement;
const result: HTMLElement = document.getElementById("result");

const throttleFunction = throttle((text: any) => {
  result.textContent = text;
}, 1500);

input.addEventListener("input", (event) => {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = inputElement.value;
  throttleFunction(inputValue);
});
