const sumAll = function(min, max) {
    if (min < 0 || max < 0 ){
        return "ERROR";
    }
    if (!isNumber(min) || !isNumber(max)){
        return "ERROR"
    }
    function isNumber (value){
        return typeof value === 'number';
    }
    if (min > max) {
        const temp = max;
        max = min;
        min = temp;
    }
    let finalSum = 0;
    for (let i = min; i<=max; i++){
        finalSum = i + finalSum;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
