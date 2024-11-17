type User = {
    name: string;
    age: number;
    occupation: string;
}
type Admin = {
    name: string;
    age: number;
    role: string;
}
export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Jan Kowalski',
        age: 17,
        occupation: 'Student'
    }, 
    {
        name: 'Tomasz Malinowski',
        age: 20,
        role: 'Administrator'
    }
];


function logPerson(person: Person) {
    let additionalInformation: string;
    if ("role" in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(' - ${person.name}, ${person.age}, ${additionalInformation}');
}

/*
    problem z person.role -> nie kazdy person ma role, TypeSceipt nie moze jednoznacznie rozroznic czy obiekt person jest User czy Admin
    moglby byc Admin z role = "" i wtedy weszloby do drugiego ifa i sprawdzilo occupation na admin a on nie ma
*/
