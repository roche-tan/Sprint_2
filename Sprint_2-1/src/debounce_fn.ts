export const debounce = (
  fn: Function,
  delay: number,
  immediate: boolean = false
  // immediate is false if not passed argument as not always is needed
) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    if (immediate) {
      fn(...args);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};