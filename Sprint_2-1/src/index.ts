export const debounce = (fn: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
