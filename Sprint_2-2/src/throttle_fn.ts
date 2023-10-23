export const throttle = (fn: Function, wait: number) => {
  let canCall: boolean = true;
  let args: any[];

  return function (...newArgs: any[]) {
    if (canCall) {
      args = newArgs;
      fn.apply(this, args);
      canCall = false;
      setTimeout(() => {
        canCall = true;
        if (args) {
          fn.apply(this, args);
          args = null;
        }
      }, wait);
    }
  };
};
