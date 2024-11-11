// EXAMPLE 1

var Person = {}
var Worker = {}
Worker.prototype = Object.create( Person.prototype );

// EXAMPLE 2

var Person = {}
var Worker = {}
Worker.prototype = Person.prototype;

/*
Są bezpośrednio powiązane w łańcuchu, jezeli zmienimy cokolwiek w Person to ta zmiana wplynie na Worker
Z perspektywy Worker jezeli odwolamy sie do prototype to mozmey cos zmienic w Person a chcielibysmy zeby byly niezalezne
*/

// EXAMPLE 3

var Person = {}
var Worker = {}
Worker.prototype = new Person();

/*
Nieefektywne zuzycie pamieci, Worker skopiowal wszystkie funkcje i pola, tracimy wydajnosc
Skopiujemy wszystkie dane z Person wiec prototyp przechowuje tez specyficzne dane dla Person a nie tylko metody
*/