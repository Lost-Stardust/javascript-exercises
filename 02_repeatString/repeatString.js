const repeatString = function(string, number,) {
    
    if (number < 0) {
        return 'ERROR';
    }

    let string2 = ''
    for (i = 0; i < number; i++) {
        
        string2 += string
        
    }
    const result1 = string2;

    return result1;
};
repeatString('hey', 3)
repeatString('hey', 10)
repeatString('hey', 1)
repeatString('', 0)
repeatString('hey', -1)
repeatString(' ', 10)


// Do not edit below this line
module.exports = repeatString;
