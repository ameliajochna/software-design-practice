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

function* take(it, limit) {
    for(let  i=0; i<limit; i++){
        yield it.next().value;
    }
}

for(let v of take(fibI(), 20)){
    console.log(v);
}