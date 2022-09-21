// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].


/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let result = [];
    let counter;
    for(let i=left;i<right+1;i++){
     counter = true;
     for(let num of i.toString().split('')){
       if(i%Number(num) !==0){
         counter = false;
       }
     }
     if(counter){
       result.push(i);
     }
    }
    return result;
  };