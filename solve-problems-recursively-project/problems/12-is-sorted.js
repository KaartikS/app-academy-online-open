/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return true;
  }
  if (arr[arr.length - 1] < arr[arr.length - 2]) {
    return false;
  }
  else {
    return isSorted(arr.slice(0, arr.length - 1));
  }
}

console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([1, 2, 3, 4, 5])); // true


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}