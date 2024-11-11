function isOwnField(obj, field) {
    return obj.hasOwnProperty(field);
}

var p = {
    name: 'jan'
};

var q = {
    surname: 'kowalski'
};

Object.setPrototypeOf(p, q);
console.log(p.name)
console.log(p.surname)


console.log(isOwnField(p, 'name'));
console.log(isOwnField(p, 'surname'));

for (let key in p) {
    if (p.hasOwnProperty(key)) {
        console.log(key);
    }
}

for (let key in p) {
    console.log(key);
}
