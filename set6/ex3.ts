function forEach<T>(a: T[], f: (value: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < a.length; i++) {
        f(a[i], i, a);
    }
}

function map<T, U>(a: T[], f: (value: T, index: number, array: T[]) => U): U[] {
    let result: U[] = [];
    for (let i = 0; i < a.length; i++) {
        result.push(f(a[i], i, a));
    }
    return result;
}

function filter<T>(a: T[], f: (value: T, index: number, array: T[]) => boolean): T[] {
    let result: T[] = [];
    for (let i = 0; i < a.length; i++) {
        if (f(a[i], i, a)) {
            result.push(a[i]);
        }
    }
    return result;
}

const a = [1, 2, 3, 4];

console.log("forEach:");
forEach(a, (value) => console.log(value));

console.log("filter:");
console.log(filter(a, (value) => value < 3));

console.log("map:");
console.log(map(a, (value) => value * 2));
