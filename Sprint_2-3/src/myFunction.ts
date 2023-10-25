import { memoize } from "./memoize-fn";

// FACTORIAL

const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

export const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));

// const memoizedAdd = memoize((a: number, b: number) => {
//   return a + b;
// });

// console.log(memoizedAdd(2, 3));
// console.log(memoizedAdd(5, 3));
