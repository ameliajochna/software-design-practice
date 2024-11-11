// wyjaśnić:

console.log( (![] + [])[+ []]+ (![]+ [])[+ ! + []] + ([![]] + [][[]])[+ ! + [] + [ + []]] + (![]+[])[!+[]+!+[]] );

// (![]) -> negacja tablicy, false

console.log( (false + [])[+[]]+ (false+ [])[+ ! + []] + ([false] + [][[]])[+ ! + [] + [ + []]] + (false+[])[!+[]+!+[]] );

//(false + []) -> konwertuje do ciagu znakow, po przeksztalceniu mamy "false" + [] , a [] to pusty ciag znakow zatem = "false"

console.log( "false"[+[]]+ "false"[+ ! + []] + ([false] + [][[]])[+ ! + [] + [ + []]] + "false"[!+[]+!+[]]);

// ("false")[+[]] -> +[] przeksztalca pusta tablice w liczbe co daje 0, "false"[0] = "f"

console.log( "f"+ "false"[+!+[]] + ([false] + [][[]])[+ ! + [] + [ + []]] + "false"[!+[]+!+[]]);

//  +[] to 0, !0 to 1, +1 to 1, "false"[1] to "a"

console.log( "f"+ "a" + ([false] + [][[]])[+ ! + [] + [ + []]] + "false"[!+[]+!+[]]);

// [][[]] -> proba sprawdzenia wartosci w tablicy [] dla indeksu [[]], undefined
// [false] + undefined -> "falseundefined" bo dodanie tablicy do wartosci daje ciag znakow

console.log( "f"+ "a" + "falseundefined"[+!+[]+[ +[]]] + "false"[!+[]+!+[]]);

// [+!+[] + [ +[]]]
// +!+[] to 1 jak wyzej -> 1+[ +[]]
//  +[] to 0 ->1+[0]
// 1 + [0] to dodanie elementu, jezeli jedne jest liczba a drugi tablica to tablica zostaje zamieniona na lancuch znakow = ['10']

console.log( "f"+ "a" + "falseundefined"['10'] + "false"[!+[]+!+[]]);

//"falseundefined"['10'] = '10' element tablicy, jezeli pytamy o indeks przy pomocy zmiennej niebedacej int to zostanie to zamienione na int czyli '10'=10 =  dziesiaty element -> "i" 

console.log( "f"+ "a" + "i" + "false"[!+[]+!+[]]);

//[!+[]+!+[]]
// !+[] to 1 -> [1+!+[]]
// !+[] to 1 -> [1+1] wiec [2]

console.log( "f"+ "a" + "i" + "false"[2]);
console.log( "f"+ "a" + "i" + "l");
