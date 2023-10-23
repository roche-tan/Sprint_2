export const throttle = (fn, wait) => {
    let canCall = true;
    let args;
    return function (...newArgs) {
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
