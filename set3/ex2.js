function forEach(a, f) {
    for (let i = 0; i < a.length; i++) {
        f(a[i], i, a);
    }
}

function map(a, f) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(f(a[i], i, a));
    }
    return result;
}

function filter(a, f) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (f(a[i], i, a)) {
            result.push(a[i]);
        }
    }
    return result;
}

var a = [1, 2, 3, 4];

forEach(a, _ => console.log(_));
forEach(a, function(x) { console.log(x); });

console.log(filter(a, _ => _ < 3));
console.log(filter(a, function(x) { return x < 3; }));


console.log(map(a, _ => _ * 2));
console.log(map(a, function(x) { return x * 2; }));
