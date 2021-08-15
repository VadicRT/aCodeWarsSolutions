
/**
 * a function that takes an array of numbers and returns the sum of the numbers
 * @param  {[array]} numbers [an array of numbers]
 * @return {[number]}         [sum of the numbers]
 */
function sum(numbers) {
	"use strict";
	return numbers.length ? numbers.reduce((sum, current) => sum + current) : 0;
}

console.log(sum([2, 5, -2, 9.2]));

