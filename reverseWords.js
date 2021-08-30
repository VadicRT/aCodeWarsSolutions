/**
 * function accepts a string parameter, and reverses each word in the string
 * @param  {string} str Any sentence
 * @return {string}     modified sentence
 */
function reverseWords(str) {
	return str.split(' ').map(item => item.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('This is an example'));
