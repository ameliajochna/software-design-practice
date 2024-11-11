function sum(...args) {
    let ans = 0;
    args.forEach(x =>{
        ans += x;
    });
    return ans;
}
console.log(sum(1,2,3));
 // 6
console.log(sum(1,2,3,4,5));
 // 15