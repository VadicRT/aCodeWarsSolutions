/**
 * given an array of ones and zeroes, convert the equivalent binary value to an integer
 * @param  {array} arr array of ones and zeroes
 * @return {number}     an integer
 */
function binaryArrayToNumber(arr) {
	return parseInt(arr.join(''), 2);
}

console.log(binaryArrayToNumber([1,1,1,1]) == 15);

	



