function is_divisible_by_digits_sum(val){
    let str_val = val.toString();
    let sum = 0;
    for(let i = 0; i < str_val.length; i++){
        sum += (str_val[i] - '0');
    }
    return (val % sum == 0);
}

function is_divisible_by_each_digit(val){
    let str_val = val.toString();
    for(let i = 0; i < str_val.length; i++)
        if(val % (str_val[i] - '0') != 0) return false;
    return true;
}

for(let i = 1; i <= 100000; i++){
    if(is_divisible_by_digits_sum(i) && is_divisible_by_each_digit(i)){
        console.log(i);
    }
}