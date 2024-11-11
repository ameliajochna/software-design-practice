function fib(n){
    if(n == 0) return 0;
    else if(n==1) return 1;
    else return fib(n-1)+fib(n-2);
}

function memoize(fn){
    var cache = {};
    return function(n){
        if(n in cache) return cache[n];
        else{
            var result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

var memo_fib = memoize(fib); 

for(let i = 10; i <= 40; i++){
    console.log(" n = ", i);

    console.log("RECURSION: ");
    console.time();
    fib(i);
    console.timeEnd();

    console.log("MEMOIZE 1: ");
    console.time();
    memo_fib(i);
    console.timeEnd();

    console.log("MEMOIZE 2: ");
    console.time();
    memo_fib(i);
    console.timeEnd();
}
