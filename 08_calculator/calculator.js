const add = function(...num) {
	return num.reduce((total, currentItem) => {return total + currentItem});
};

const subtract = function(...num) {
	return num.reduce((total, currentItem) => {return total - currentItem});
};

const sum = function(num) {
  if (num.length === 0){
    return 0;
  }
	return num.reduce((total, currentItem) => {return total + currentItem});
};

const multiply = function(num) {
	return num.reduce((total, currentItem) => {return total * currentItem});
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
  let total = 1;
  for (num; num>0; num--){
    console.log(`${num} + ${total}`);
    total = num*total;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
