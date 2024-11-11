function fibI() {
    var a = 1, b = 0;
    return {
       next : function() {
        [a, b] = [a+b, a];
        return {
            value : b,
            done : false
        }
        } 
    }
}

function *fibG() {
    var a = 1, b = 0;
    while(true){
        [a, b] = [a+b, a];
        yield b;
    }
}


const fibIterator = fibI();
for(let i = 1; i<=10; i++)
    console.log(i, ": ", fibIterator.next().value);

const fibGenerator = fibG();
for(let i = 1; i<=10; i++)
    console.log(i, ": ", fibGenerator.next().value);


for (let value of fibG()) {
    console.log("Generator: ", value);
    if (value > 1000) break;
}

for(let f of {[Symbol.iterator] : fibI}){
    console.log("Iterator: ", f);
    if(f > 1000) break;
}
