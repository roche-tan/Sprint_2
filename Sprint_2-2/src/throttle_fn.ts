export const throttle = (fn: Function, wait: number) => {
  let canCall: boolean = true;
  let args: any[] = [];
  let timeout: NodeJS.Timeout | null = null;

  return function (...newArgs: any[]) {
    if (canCall) {
      args = newArgs;
      fn.apply(this, args);
      canCall = false;
      timeout = setTimeout(() => {
        canCall = true;
        if (args.length > 0) {
          fn.apply(this, args);
          args = [];
        }
      }, wait);
    } else {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        canCall = true;
        if (args.length > 0) {
          fn.apply(this, args);
          args = [];
        }
      }, wait);
    }
  };
};
