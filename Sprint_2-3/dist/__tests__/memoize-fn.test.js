import { memoize } from "../src/memoize-fn";
describe("Check memoize function", () => {
    it("Function memoize exists", () => {
        expect(memoize).toBeDefined();
    });
    it("memoizes and addition function", () => {
        const add = (a, b) => a + b;
        const memoizedAdd = memoize(add);
        const result1 = memoizedAdd(2, 3);
        const result2 = memoizedAdd(2, 3);
        expect(result1).toBe(5);
        expect(result2).toBe(5);
        const result3 = memoizedAdd(5, 3);
        const result4 = memoizedAdd(5, 3);
        expect(result3).toBe(8);
        expect(result4).toBe(8);
    });
    it("memoize a function with complex arguments", () => {
        const complexFunction = (obj) => obj.x + obj.y;
        // Crear una función espía para rastrear las llamadas a 'multiArgsFunction'
        const spyMultiArgsFunction = jest.fn(complexFunction);
        const memoizedComplexFunction = memoize(spyMultiArgsFunction);
        const obj1 = { x: 2, y: 3 };
        const obj2 = { x: 5, y: 3 };
        const result1 = memoizedComplexFunction(obj1);
        const result2 = memoizedComplexFunction(obj1);
        expect(result1).toBe(5);
        expect(result2).toBe(5);
        const result3 = memoizedComplexFunction(obj2);
        const result4 = memoizedComplexFunction(obj2);
        expect(result3).toBe(8);
        expect(result4).toBe(8);
        expect(spyMultiArgsFunction).toHaveBeenCalledTimes(2);
    });
    it("Caches results for each unique set of arguments", () => {
        const multiArgsFunction = (x, y) => x + y;
        // Crear una función espía para rastrear las llamadas a 'multiArgsFunction'
        const spyMultiArgsFunction = jest.fn(multiArgsFunction);
        const memoizeMultiArgsFunction = memoize(spyMultiArgsFunction);
        const restult1 = memoizeMultiArgsFunction(2, 3);
        const restult2 = memoizeMultiArgsFunction(2, 3);
        const restult3 = memoizeMultiArgsFunction(5, 3);
        const restult4 = memoizeMultiArgsFunction(5, 3);
        expect(restult1).toBe(5);
        expect(restult2).toBe(5);
        expect(restult3).toBe(8);
        expect(restult4).toBe(8);
        expect(spyMultiArgsFunction).toHaveBeenCalledTimes(2);
    });
    it("Caches results for asyn functions", async () => {
        // Test for an async function that returns promises
        const asyncFunction = async (x) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(x * 2), 100);
            });
        };
        const memoizedAsyncFunction = memoize(asyncFunction);
        const result1 = await memoizedAsyncFunction(2);
        const result2 = await memoizedAsyncFunction(2);
        expect(result1).toBe(4);
        expect(result2).toBe(4);
    });
    it("Should propagate errors and not affect the cache", () => {
        // function that may throw error
        const errorFunction = (a, b) => {
            if (b === 0) {
                throw new Error("Division by zero");
            }
            return a / b;
        };
        const memoizeErrorFunction = memoize(errorFunction);
        try {
            const result1 = memoizeErrorFunction(4, 0);
        }
        catch (error) {
            // Ensure that the error is propagated correctly
            expect(error.message).toBe("Division by zero");
        }
        // Call the memoized function with valid arguments
        const result2 = memoizeErrorFunction(4, 2);
        // Ensure that the cache is not affected by the previous error
        expect(result2).toBe(2);
    });
});
