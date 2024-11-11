function is_prime(val){
    for(let i = 2; i < val; i++)
        if(val % i == 0) 
            return false;
    return true;
}

for(let i = 2; i <= 100000; i++)
    if(is_prime(i))
        console.log(i);
