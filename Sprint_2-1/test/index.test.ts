import { debounce } from "../src/index";

// const debounce = require("../src/index");

// Mockup Jest
jest.useFakeTimers();

describe("Check debounce function", () => {
  it("Should run function after the delay", () => {
    // Configura una función de prueba
    const mockFunction = jest.fn();

    // Crea una función debounce con un retraso de 1000 ms
    const debouncedFunction = debounce(mockFunction, 1000);

    // Llama a la función debounce
    debouncedFunction();

    // Avanza el tiempo en 1000 ms
    jest.advanceTimersByTime(1000);

    // Verifica que la función se haya llamado solo una vez
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("Should run the function only once for repeated calls within the delay period.", () => {
    // Configura una función de prueba
    const mockFunction = jest.fn();

    // Crea una función debounce con un retraso de 1000 ms
    const debouncedFunction = debounce(mockFunction, 1000);

    // call function several times
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    jest.advanceTimersByTime(1000);

    // check if function has called once
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("Should passthe arguments to the debounce function correctly", () => {
    // Configura una función de prueba
    const mockFunction = jest.fn();

    // Crea una función debounce con un retraso de 1000 ms
    const debouncedFunction = debounce(mockFunction, 1000);

    // call debounce function with arguments
    debouncedFunction("arg1", "arg2");

    jest.advanceTimersByTime(1000);

    // expect function to be called with 2 arguments
    expect(mockFunction).toHaveBeenCalledWith("arg1", "arg2");
  });
});
