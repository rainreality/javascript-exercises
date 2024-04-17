const removeFromArray = function(arrayCopy, ...theArgs) {

    // Rest parameters - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    // Manual creation of an array from parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from


    // Version 0.1 - Rough work
    // const arrayCopy = ["1", "2", "3", "4"];
    // console.table(arrayCopy);
    // (index)	Values
    // 0	1
    // 1	2
    // 2	3
    // 3	4

    // first=arrayCopy.slice(0,2);
    // Array [ "1", "2" ]

    // second=arrayCopy.slice(3);
    // Array [ "4" ]

    // arrayCopy=first.concat(second);
    // Array(3) [ "1", "2", "4" ]
    // removeFromArray (arrayCopy, ...theArgs.slice(counter))

    // Version 1.0 - Slice
    // for (let arg in theArgs) {
    //     for (let element = 0; element < arrayCopy.length; element++) {
    //         if (theArgs[arg] === arrayCopy[element]) {
    //             first = arrayCopy.slice(0, element);
    //             second = arrayCopy.slice(element + 1);
    //             arrayCopy = first.concat(second);
    //             element--;
    //         }
    //     }
    // }
    // return arrayCopy;

    // Version 1.1 - Slice
    // for (let arg in theArgs) {
    //     for (let element = 0; element < arrayCopy.length; element++) {
    //         if (theArgs[arg] === arrayCopy[element]) {
    //             arrayCopy = arrayCopy.slice(0, element).concat(arrayCopy.slice(element + 1));
    //             element--;
    //         }
    //     }
    // }
    // return arrayCopy;

    //Version 2.0 - Splice https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript/13989373#13989373
    // for (let arg in theArgs) {
    //     for (let element = 0; element < arrayCopy.length; element++) {
    //         if (theArgs[arg] === arrayCopy[element]) {
    //             arrayCopy.splice(element,1);
    //             element--;
    //         }
    //     }
    // }
    // return arrayCopy;

    // Version 3.0 - Filter - https://stackoverflow.com/a/20690490

    // Exploring arrowed functions using the old method
    // arrayCopy = arrayCopy.filter(function(item) {
    //     console.log (`Item ${item} and Args: ${theArgs}`);
    // })

    // Simplest way using arrow functions
    // arrayCopy = arrayCopy.filter (item => !theArgs.includes(item));
    // return arrayCopy;

    // Expanding filter to use a full function so I can see what it's doing
    // Basically filter uses return values of true and false to decide whether
    // It should include the item values sent.
    arrayCopy = arrayCopy.filter (includesItem);
    function includesItem (item){
        return !theArgs.includes(item);
        // console.log (`This is the item ${item}`);
        // if (item === 3){
        //     return false;
        // }else{
        //     return true;
        // }
    }
    return arrayCopy;
}
// Do not edit below this line
module.exports = removeFromArray;
