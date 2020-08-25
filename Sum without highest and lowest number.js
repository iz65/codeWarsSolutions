https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript

Sum all the numbers of the array (in F# and Haskell you get a list)
except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge,
even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)
function sumArray(arr) {
    if (arr === null || arr.length === 1) return 0;
 let min = Math.min(...arr);
 let max = Math.max(...arr);
  let indMin = 0;
  let indMax = 0;
let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
      indMin = i;
    }
    if (arr[i] === max) {
      indMax = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (i !== indMin && i !== indMax) {
      sum += arr[i];
    }
  }
  return sum;
}