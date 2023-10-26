export const throttle = (fn, delay) => {
    let throttleCallCount = 0;
    if (typeof fn !== "function") {
        throw new Error("Provided function is not a valid function");
    }
    if (typeof delay !== "number" || isNaN(delay)) {
        throw new Error("Delay must be a number");
    }
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunction = () => {
        if (waitingArgs == null) {
            shouldWait = false;
        }
        else {
            fn(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunction, delay);
        }
    };
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }
        fn(...args);
        shouldWait = true;
        setTimeout(timeoutFunction, delay);
        throttleCallCount++;
    };
};
