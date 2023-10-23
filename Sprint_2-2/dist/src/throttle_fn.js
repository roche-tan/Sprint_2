export const throttle = (fn, wait) => {
    let canCall = true;
    let args = [];
    let timeout = null;
    return function (...newArgs) {
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
        }
        else {
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
