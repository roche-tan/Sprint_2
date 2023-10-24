import { memoize } from "../src/memoize-fn";

describe("Check memoize function", () => {
  it("Function memoize exists", () => {
    expect(memoize).toBeDefined();
  });

  it("memoizes and addition function", () => {
    const add = (a: number, b: number): number => a + b;
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
    const complexFunction = (obj: { x: number; y: number }): number =>
      obj.x + obj.y;
    const memoizedComplexFunction = memoize(complexFunction);

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
  });
});
