/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// your code here
function sumArray (intArray){
  // base case - if array is one element in length, return the element
  if(intArray.length === 1){
    return intArray[0];
  }
  else{
    // pop the last element, add it to the recursive call return
    return intArray.pop() + sumArray(intArray);
  }
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
