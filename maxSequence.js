/**
 * maximum sum subarray 
 * @param  {array} arr list of numbers 
 * @return {number}     maximum sum
 */
var maxSequence = function(arr){
  let maxSum = 0;
   let partialSum = 0;

   for (let item of arr) { // for everyone element of list
     partialSum += item; // adding a value of the element to patrialSum
     maxSum = Math.max(maxSum, partialSum); // remember the maximum at the moment запоминаем максимум на данный момент
     if (partialSum < 0) partialSum = 0; // zero if the number is negative
   }

   return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));