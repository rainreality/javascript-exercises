const reverseString = function(sentString) {
    let stringArray = [];
    let countChars = 0;
    while (countChars < sentString.length) {
        firstCharacter = sentString.slice(countChars,countChars+1);
        stringArray[sentString.length - 1 - countChars] = firstCharacter;
        countChars++;
    };
    return stringArray.join('');
};

// Do not edit below this line
module.exports = reverseString;

//test