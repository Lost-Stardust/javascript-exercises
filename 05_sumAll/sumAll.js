const sumAll = function(start, end) {
    const numbers = [];

    if(start < 0 || end <0) {
        return 'ERROR';
    }
    else if (typeof start == 'string' || typeof end == 'string') {
        return 'ERROR';
    }
    else if (isNaN(start) == true || isNaN(end) == true) {
        return 'ERROR';
    }

    for (i = start; i <= end; i++) {
        numbers.push(i)
    }
    for (i = start; i >= end; i--) {
        numbers.push(i)
    }
    console.log(numbers)
    let sum = 0; 
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
