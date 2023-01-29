const findMinimum = arr => {
  // Your code here
  let smallestNum = arr[0];
  for(let i = 0; i < (arr.length - 1); i++){
    if(arr[i + 1] < arr[i]){
      smallestNum = arr[i + 1];
    }
  }
  return smallestNum;
};

const runningSum = arr => {

  for(let i=0; i<arr.length-1; i++){
    // first number is always the same as in original array, modify arr starting from the second number at index 1
    let temp=arr[i]+arr[i+1]; 
    arr[i+1]=temp; 
  }
   //return updated nums with running sum
   return arr; 
};

const evenNumOfChars = arr => {

  // Your code here
  let countEven = 0;
  for(let i = 0; i < arr.length; i++){
    currentString = arr[i];
    if(currentString.length % 2 === 0){
      countEven++;
    }
  }
  return countEven;
};

const smallerThanCurr = arr => {
  // sort the array 
  const sorted = [...arr].sort((a, b) => a - b);

  // after the array is sorted, return the index of the element in the array
  return arr.map(num => sorted.indexOf(num));
};

const twoSum = (arr, target) => {
  // build a table of element/index pairs
  const hashtable = {};
  for(let i = 0; i < arr.length; i++){
    hashtable[arr[i]] = i;
  }

  // find the target for each index
  for(let j = 0; j < arr.length; j++){
    let complement = target - arr[j];
    // if hashtable contains a complement and the complement is not in the current index, return the index
    if(hashtable.hasOwnProperty(complement) && hashtable[complement] !== j){
      return true;
    }
  }
  return false;
};

const secondLargest = arr => {
  // sort the array in ascending order
  const sorted = [...arr].sort((a, b) => a - b);

  // return the second to last number
  return sorted[sorted.length - 2];
};

const shuffle = (arr) => {

  let shuffled = arr.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {

    // get randon index 
    const j = Math.floor(Math.random() * (i + 1));
    // do the swap
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  // return the swapped array
  return shuffled;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];