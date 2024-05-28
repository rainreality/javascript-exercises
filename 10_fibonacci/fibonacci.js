const fibonacci = function(num) {
    num = Number(num);
    if (num < 0){
      return "OOPS";
    }
    if (num === 0){
      return 0;
    }
    if (num === 1){
      return 1;
    }
    let last = 1;
    let previous = 0;
    let value;
    for (let i = 2; i<=num; i++){
      value = last + previous;
      previous = last;
      last = value;
    }
    return value;
};

// Do not edit below this line
module.exports = fibonacci;
