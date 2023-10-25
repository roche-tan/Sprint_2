import { memoize } from "./memoize-fn.js";

// FACTORIAL
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
export const memoizedFactorial = memoize(factorial);

// const memoizedAdd = memoize((a: number, b: number) => {
//   return a + b;
// });
// console.log(memoizedAdd(2, 3));
// console.log(memoizedAdd(5, 3));
