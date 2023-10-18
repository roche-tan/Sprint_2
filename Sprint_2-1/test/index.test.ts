import { debounce } from "../src/index";

// Mockup Jest
jest.useFakeTimers();

describe("Check debounce function", () => {
  it("Should run function after the delay", () => {
    const mockFunction = jest.fn();

    // Debounce with a 1000ms delay
    const debouncedFunction = debounce(mockFunction, 1000);

    debouncedFunction();

    // Advance 1000ms
    jest.advanceTimersByTime(1000);

    // Check if function has been called
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("Should run the function only once for repeated calls within the delay period.", () => {
    const mockFunction = jest.fn();

    const debouncedFunction = debounce(mockFunction, 1000);

    // call function several times
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    // Check if function has not been called yet
    expect(mockFunction).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    // check if function has called once
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("Should passthe arguments to the debounce function correctly", () => {
    const mockFunction = jest.fn();

    const debouncedFunction = debounce(mockFunction, 1000);

    // call debounce function with arguments
    debouncedFunction("arg1", "arg2");
    expect(mockFunction).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    // expect function to be called with 2 arguments
    expect(mockFunction).toHaveBeenCalledWith("arg1", "arg2");
  });
});
