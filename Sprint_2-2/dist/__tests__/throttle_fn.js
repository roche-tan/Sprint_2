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
    it("waits for the specified time before allowing another call", async () => {
        const mockFunction = jest.fn();
        const throttleFunction = throttle(mockFunction, 100);
        throttleFunction();
        expect(mockFunction).toBeCalled();
        await new Promise((resolve) => setTimeout(resolve, 50));
        throttleFunction();
        expect(mockFunction).toBeCalledTimes(1);
    });
    it("calls the throttled function only once during the wait period", async () => {
        const mockFunction = jest.fn();
        const throttleFunction = throttle(mockFunction, 100);
        throttleFunction();
        throttleFunction();
        throttleFunction();
        throttleFunction();
        throttleFunction();
        await new Promise((resolve) => setTimeout(resolve, 200));
        // Después de esperar, la función mockFunction pasada a throttle debe llamarse solo una vez
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
    it("cancels waiting and allows immediate call with cancellation argument", async () => {
        const mockFunction = jest.fn();
        const throttleFunction = throttle(mockFunction, 100);
        // Call throttleFunction without expecting the function to be executed immediately
        throttleFunction();
        expect(mockFunction).not.toHaveBeenCalledTimes(0);
        // Call throttleFunction with a cancellation argument
        throttleFunction("cancel");
        // Now, let's wait for a bit longer than the throttle duration (100ms)
        await new Promise((resolve) => setTimeout(resolve, 200));
        // The mockFunction should not be called because we canceled the previous call
        expect(mockFunction).not.toHaveBeenCalled();
        // Call throttleFunction again, and it should execute immediately
        throttleFunction();
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});
