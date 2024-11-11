function fibonacci_recursion(ind){
    if(ind == 0) return 0;
    else if(ind == 1) return 1;
    else if(ind == 2) return 1;
    else return fibonacci_recursion(ind-1)+fibonacci_recursion(ind-2);
}

function fibonacci_iteratively(ind){
    let a = 1, b = 1, c = 2;
    while(ind>1){
        a = b;
        b = c;
        c = a + b;
        ind --;
    }
    return a;
}

for(let i = 10; i <= 60; i++){ // dla 45 juz jest 6 sekund wiec jakos do tylu
    console.log(" n = ", i);

    console.log("ITERATIVE: ");
    console.time();
    fibonacci_iteratively(i);
    console.timeEnd();

    console.log("RECURSION: ");
    console.time();
    fibonacci_recursion(i);
    console.timeEnd();
}
