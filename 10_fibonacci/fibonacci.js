const fibonacci = function(limit) {
    let a = 0;
    let b = 1;

    limit = parseInt(limit)

    if (limit < 0) {
        return "OOPS"
    }

    for (i = 0; i < limit; i++) {
        let c = a + b;
        a = b;
        b = c;
        console.log(a);
        // console.log(b);
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
