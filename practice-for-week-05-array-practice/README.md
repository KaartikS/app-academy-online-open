# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(?) - O(1)
Space complexity: O(?) - O(1)
Justification: _Fill this in_

All it does is add an element and give it an index that’s 1 greater than the index of the last element in the array. So it doesn’t matter whether the array has 10 elements or 1000

[push on MDN][push]


## `arr.pop()`

Time complexity: O(?) - O(1)
Space complexity: O(?) - O(1)

Justification: _Fill this in_
Removes last element of array and returns that  element. It does not matter what the sie of the array is

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)

Justification: _Fill this in_
It deletes the first element of an array and modified the index of all remaining elements of the array accordingly.


[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)

Justification: _Fill this in_
It adds new element at the beginning of an array and modifies the index of all remaining elements of the array accordingly.

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(1)

Justification: _Fill this in_
Potentially have to change the indices of all elememts if splice at the beginning

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_
Same reasonning as for the splice method

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax