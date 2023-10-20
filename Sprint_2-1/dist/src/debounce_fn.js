export const debounce = (fn, delay, immediate = false
// immediate is false if not passed argument as not always is needed
) => {
    let timeoutId = null;
    return (...args) => {
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
