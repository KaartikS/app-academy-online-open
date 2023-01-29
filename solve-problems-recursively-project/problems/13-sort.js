/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/
debugger;

function sort(nums, sorted = []) {
  // your code here
  let smallestNum = Infinity;
  if(nums === []){
    return sorted;
  }
  else{
    for(let i = 0; i < nums.length; i++){
      let element = nums[i];
      if(element < smallestNum){
        smallestNum = element;
        sorted.push(element);
        nums.splice(nums.indexOf(smallestNum), 1);
      }
    }
    return sort(nums.slice(0, nums.length - 1));
  }
}

sort([0, 1, -3]); // [-3, 0, 1]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
