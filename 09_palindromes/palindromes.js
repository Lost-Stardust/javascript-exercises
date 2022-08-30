const palindromes = function (str) {
    let palin =  str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    palin = palin.replace(/ /g, '')
    console.log(palin)
    let drome = palin.split("").reverse().join("");
    console.log(drome)
    if (drome == palin) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
