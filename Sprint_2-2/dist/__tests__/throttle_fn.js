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
        mockFunction.mockClear(); //"Restore the state of the mock function.
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
    // it("handles arguments and context correctly", async () => {
    //   const context = { key: "value" };
    //   let returnedContext;
    //   const mockFunction = jest.fn(function (this: any) {
    //     returnedContext = this;
    //   });
    //   const throttleFunction = throttle(mockFunction, 100);
    //   throttleFunction.call(context, 1, 2, 3);
    //   await new Promise((resolve) => setTimeout(resolve, 50));
    //   throttleFunction.call(context, 4, 5);
    //   await new Promise((resolve) => setTimeout(resolve, 100));
    //   expect(mockFunction).toHaveBeenCalledTimes(1);
    //   expect(mockFunction).toHaveBeenCalledWith(1, 2, 3);
    //   expect(returnedContext).toEqual(context);
    // });
});
