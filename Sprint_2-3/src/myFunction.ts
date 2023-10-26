import { memoize } from "./memoize-fn.js";

// FACTORIAL

const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

export const memoizedFactorial = memoize(factorial);

