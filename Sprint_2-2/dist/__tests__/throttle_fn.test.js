/**
 * @jest-environment jsdom
 */
import { throttle } from "../src/throttle_fn";
// Define una función ficticia que será llamada dentro de la función throttle
const mockFunction = () => {
    mockFunction.called = true;
};
mockFunction.called = false;
describe("check throttle function", () => {
    it("function throttle exists", () => {
        expect(throttle).toBeDefined();
    });
    it("should throw an error if delay is not a number", () => {
        const throttleWithInvalidDelay = () => {
            throttle(() => { }, "invalid");
        };
        expect(throttleWithInvalidDelay).toThrowError("Delay must be a number");
    });
    it("Should throw an error if fn is not a valid function", () => {
        const throttleWithInvalidFn = () => {
            throttle("not a function", 100);
        };
        expect(throttleWithInvalidFn).toThrowError("Provided function is not a valid function");
    });
    it("Limits function calls to once within specified time", async () => {
        const throttleFunction = throttle(mockFunction, 100);
        expect(mockFunction.called).toBe(false); //makes sure function has not been called before
        throttleFunction();
        expect(mockFunction.called).toBe(true); //calls immediatelly
        await new Promise((resolve) => setTimeout(resolve, 150));
        throttleFunction();
        throttleFunction();
        expect(mockFunction.called).toBe(true);
        await new Promise((resolve) => setTimeout(resolve, 100));
        expect(mockFunction.called).toBe(true);
    });
    it("calls the passed function immediately on the first invocation", () => {
        const mockFunction = jest.fn();
        const throttleFunction = throttle(mockFunction, 100);
        throttleFunction();
        expect(mockFunction).toHaveBeenCalled();
    });
    it("Passes arguments to the throttled function", () => {
        const mockFunction = jest.fn();
        const throttleFunction = throttle(mockFunction, 100);
        throttleFunction(1, "example");
        expect(mockFunction).toHaveBeenCalledWith(1, "example");
    });
    it("Limits function calls with diferent delays", async () => {
        const mockFunction = jest.fn();
        const throttleFunction = throttle(mockFunction, 100);
        throttleFunction();
        expect(mockFunction).toHaveBeenCalledTimes(1);
        await new Promise((resolve) => setTimeout(resolve, 50));
        throttleFunction();
        throttleFunction();
        expect(mockFunction).toHaveBeenCalledTimes(1);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        expect(mockFunction).toHaveBeenCalledTimes(2);
    });
    it("Limits repeated function calls to once within specific time", async () => {
        const mockFunction = jest.fn();
        const throttleFunction = throttle(mockFunction, 100);
        throttleFunction();
        expect(mockFunction).toHaveBeenCalledTimes(1);
        await new Promise((resolve) => setTimeout(resolve, 50));
        throttleFunction();
        throttleFunction();
        expect(mockFunction).toHaveBeenCalledTimes(1);
        await new Promise((resolve) => setTimeout(resolve, 100));
        expect(mockFunction).toHaveBeenCalledTimes(2);
    });
});
