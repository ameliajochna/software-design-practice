function fib(n: number): number {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return fib(n - 1) + fib(n - 2);
}

function memoize(fn: (n: number) => number): (n: number) => number {
    const cache: { [key: number]: number } = {};

    return function (n: number): number {
        if (n in cache) {
            return cache[n];
        } else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    };
}

const memo_fib = memoize(fib);

for (let i = 10; i <= 40; i++) {
    console.log(" n = ", i);

    console.log("RECURSION: ");
    console.time();
    fib(i);
    console.timeEnd();

    console.log("MEMOIZE 1: ");
    console.time();
    memo_fib(i);
    console.timeEnd();

    console.log("MEMOIZE 2: ");
    console.time();
    memo_fib(i);
    console.timeEnd();
}
