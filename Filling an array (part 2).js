https://www.codewars.com/kata/571e9af407363dbf5700067c/train/javascript

Following on from Part 1, part 2 looks at some more complicated array contents.

So let's try filling an array with...

...square numbers
The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
...a range of numbers
A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
...random numbers
A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]
...prime numbers
All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]
HOTE: All the above functions should take as their first parameter a number that determines the length of the returned
 array.

 const squares = n => {
   let arr = [];
   for (let i = 1; i <= n; i++) {
     arr.push(i**2)
   }
   return arr;
 }

 const range = (n, start, step) => {
   let arr = [start];
   for (let i = 0; i <= n-2; i++) {
     arr.push(arr[i]+step)
   }
   return arr;
 }

 const random = (n, min, max) => {
   let arr = [];
   let count = 1;
   while (count <= n){
     arr.push(Math.round(Math.random() * (max - min) + min))
         count++;
 }
   console.log (n, min, max, arr)
   return arr
 }

 function isPrime(m){
   if (m < 2) return false;
   for (let i = 2; i <= m / 2; i++){
     if (m % i === 0)
       return false;
   }
   return true;
 }
 const primes = n => {
   let count = 0;
   let arr = [];
   for (let i = 0; i < Infinity; i++) {
     if (isPrime(i)) {arr.push(i);
     count++;}
     if (count > n-1) break;
     }
   return arr
    }
