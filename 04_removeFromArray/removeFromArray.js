// const removeFromArray = function(array, value, value2, value3, value4) {
// 
    // for (i = 0; i < array.length; i++) {
        // const index = array.indexOf(value);
        // if (index > -1) {
        // array.splice(index, 1);
        // }
 
        // const index2 = array.indexOf(value2);
        // if (index2 > -1) {
        // array.splice(index2, 1);
        // }

        // const index3 = array.indexOf(value3);
        // if (index3 > -1) {
        // array.splice(index3, 1);
        // }

        // const index4 = array.indexOf(value4);
        // if (index4 > -1) {
        // array.splice(index4, 1);
        // }
    // }
    // console.log(arguments)
    //  return array;
// };


const removeFromArray = function(array, ...value) {
    
        
    value.forEach((item) => {
        const index = array.indexOf(item)
        console.log(index)
        if (index > -1) {
            array.splice(index, 1)
        }
    })
    console.log(value)
    return array;
}



// Do not edit below this line
module.exports = removeFromArray;
