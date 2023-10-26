export const throttle = (fn, delay) => {
    let shouldWait = false; //to indicate if we are waiting before making a new call to fn
    let waitingArgs;
    let result = null; // function that will resolve the promise once ejecution is completed
    // Validate the 'fn' parameter
    if (typeof fn !== "function") {
        throw new Error("Provided function is not a valid function");
    }
    // Validate the 'delay' parameter
    if (typeof delay !== "number") {
        throw new Error("Delay must be a number");
    }
    const timeoutFunction = async () => {
        // if there is no pending call, we restart shouldWait and we call result if isn't null
        if (waitingArgs == null) {
            shouldWait = false;
            result?.();
        }
        else {
            // when there is a call waiting, we call fn with the args and we restart waitingArgs and timer and then result if isn't null
            await fn(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunction, delay);
            result?.();
        }
    };
    return (...args) => {
        // returns a promise that waits until the call for fn has been executed
        return new Promise((resolve) => {
            result = resolve;
            // if there is a call in process, we update the waitingArgs
            if (shouldWait) {
                waitingArgs = args;
                return;
            }
            // if there is no call pending, we call fn immediatelly and we start timer to call timeFunction after the delay
            fn(...args);
            shouldWait = true;
            setTimeout(timeoutFunction, delay);
        });
    };
};
