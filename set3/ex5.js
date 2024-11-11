function createGenerator(n) {
    var _state = 0;
    return {
        next: function() {
            return {
                value: _state,
                done: _state++ >= n
            };
        }
    };
}

var foo = {
    n: 10,
    [Symbol.iterator]: function() {
        return createGenerator(this.n);
    }
};

foo.n = 20;
for (var f of foo) {
    console.log(f);
}
