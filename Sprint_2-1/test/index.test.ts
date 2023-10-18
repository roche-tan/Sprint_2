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
  it("should maintain the correct context when called", () => {
    const context = {
      value: 42,
      mockupFunction: jest.fn(),
    };
    const debouncedFunction = debounce(context.mockupFunction, 1000).bind(
      context
    );

    debouncedFunction();

    jest.advanceTimersByTime(1000);

    expect(context.mockupFunction).toBeCalledTimes(1);
  });

  it("Should execute the debounce function after custom delay", () => {
    const mockFunction = jest.fn();
    const debouncedFunction = debounce(mockFunction, 2000);

    debouncedFunction();

    // advance. Short of the customer delay
    jest.advanceTimersByTime(1999);

    expect(mockFunction).not.toHaveBeenCalled();

    // advance 1ms to reach customer delay
    jest.advanceTimersByTime(1);

    // function should have been called now
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
