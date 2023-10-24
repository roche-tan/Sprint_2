export const memoize = (fn) => {
    const cache = new Map(); // type string as we give arguments as clue
    return (...args) => {
        const key = JSON.stringify(args); // Converts arguments into it in JSON string for each argument
        if (cache.has(key)) {
            return cache.get(key); //returns result stored in cache if exists
        }
        else {
            const result = fn(...args); // calls function
            cache.set(key, result); //stores result in cache
            return result;
        }
    };
};
// const memoizedAdd = memoize((a: number, b: number) => {
//   return a + b;
// });
// console.log(memoizedAdd(2, 3));
// console.log(memoizedAdd(5, 3));
