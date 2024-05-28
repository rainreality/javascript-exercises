const palindromes = function (word) {
    const regex = /[^a-zA-Z0-9]/g;
    const clean=word.replace(regex, "");
    const lower=clean.toLowerCase();
    const reverse=lower.split("").reverse().join("");
    console.log(reverse);
    console.log(lower);
    if (reverse === lower){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
