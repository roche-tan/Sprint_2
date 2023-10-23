
// function is used to ensure the function is not run too frequently. Function inside delay will only execute after the delay period.

export const debounce = (
  fn: Function,
  delay: number,
  immediate: boolean = false
  // immediate is false if not passed argument as not always is needed
) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    // if timer is in process, we cancel timer with "clearTimeout"
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // if immediate is true, it runs immediatly with arguments
    if (immediate) {
      fn(...args);
    }

    // starts new timer with "setTimeout". Will run after tje delay
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
