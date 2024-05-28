const findTheOldest = function(array) {
    array.sort((a,b) => {
        if (typeof a.yearOfDeath === "undefined"){
          a.yearOfDeath = new Date().getFullYear();
        }
        if (typeof b.yearOfDeath === "undefined"){
          b.yearOfDeath = new Date().getFullYear();
        }
        return ((b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
      });
      return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
