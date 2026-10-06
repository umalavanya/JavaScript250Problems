var reverse = function(x) {
    let reverse = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x !== 0) {
        let rem = x % 10;
        reverse = reverse * 10 + rem;
        x = Math.floor(x / 10);
    }

    reverse *= sign;

    // 32-bit signed integer range check
    const INT_MIN = -(2 ** 31);      // -2147483648
    const INT_MAX = 2 ** 31 - 1;     //  2147483647
    if (reverse < INT_MIN || reverse > INT_MAX) return 0;

    return reverse;
};