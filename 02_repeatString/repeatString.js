const repeatString = function(stringToRepeat, numToRepeat) {
    let count = 0;
    let repeatedString = "";
    if (numToRepeat < 0){
        return "ERROR";
    }
    while (count < numToRepeat){
        repeatedString+=stringToRepeat;
        count++;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
