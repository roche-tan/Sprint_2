export const throttle = (fn: Function, delay: number) => {
  if (typeof fn !== "function") {
    throw new Error("Provided function is not a valid function");
  }

  if (typeof delay !== "number" || isNaN(delay)) {
    throw new Error("Delay must be a number");
  }

  let shouldWait = false;
  let waitingArgs: any[] | null;
  const timeoutFunction = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      fn(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunction, delay);
    }
  };
  return (...args: any[]) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    fn(...args);
    shouldWait = true;
    setTimeout(timeoutFunction, delay);
  };
};
