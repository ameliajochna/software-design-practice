function getLastProto(o) {
    var p = o;
    do {
    o = p;
    p = Object.getPrototypeOf(o);
    } while (p);
}

const o1 = {};
const o2 = Object.create(o1);
const o3 = Object.create(o2);
const o4 = Object.create(o3);

console.assert(getLastProto(o1) === getLastProto(o2));
console.assert(getLastProto(o2) === getLastProto(o3));
console.assert(getLastProto(o3) === getLastProto(o4));
console.assert(getLastProto(o1) === getLastProto(o4));
console.log(":)")