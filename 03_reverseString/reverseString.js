const reverseString = function(str) {
    
    let splitstr = str.split('');
    let reversestr = splitstr.reverse();
    let joinstr = reversestr.join('');

    return joinstr;
};

reverseString('hello')
reverseString('hello there')
reverseString('123! abc!')
reverseString('')

// Do not edit below this line
module.exports = reverseString;
