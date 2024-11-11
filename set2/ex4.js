class Animal {};
const dog = new Animal();

console.log(dog instanceof Animal);
console.log(dog instanceof Object);
console.log(0 instanceof Number); 
console.log(new Number(0) instanceof Number);



console.log(typeof 7);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof {});

/*
typeof ZWRACA typ prymitywny danej wartsci czyli np string boolean int object itp,

instanceof jest uzywany do sprawdzenia czy obiekt jest instancja danej klasy, sluzy do typow obiektowych
*/