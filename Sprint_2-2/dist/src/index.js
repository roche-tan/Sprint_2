import { throttle } from "./throttle_fn.js";
// HTML
const input = document.getElementById("inputText");
const result = document.getElementById("result");
const throttleFunction = throttle((text) => {
    result.textContent = text;
}, 1500);
input.addEventListener("input", (event) => {
    const inputElement = event.target;
    const inputValue = inputElement.value;
    throttleFunction(inputValue);
});
