function Tree(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
}

// Tree.prototype[Symbol.iterator] = function*() {
//     yield this.val;
//     if ( this.left )  yield* this.left;
//     if ( this.right ) yield* this.right;
// }

Tree.prototype[Symbol.iterator] = function* () {
    let q = [this];
    while (q.length > 0) {
        const current = q.splice(0, 1)[0];
        if (current.left) q.push(current.left);
        if (current.right) q.push(current.right);
        yield current.val;
    }
};

// gdybysmy uzyli stosu algorytm by przeszukiwal wglab bo wyciagnelibysmy wezel ktory ostatnio wlozylismy i weszlibysmy glebiej

var root = new Tree(1,
    new Tree(2,
        new Tree(3,
            new Tree(7),
            new Tree(8)
        ),
        new Tree(4,
            new Tree(9),
            new Tree(10)
        )
    ),
    new Tree(5,
        new Tree(6,
            new Tree(11),
            new Tree(12)
        ),
        new Tree(13,
            new Tree(14),
            new Tree(15)
        )
    )
);

for ( var e of root ) {
    console.log( e );
}
