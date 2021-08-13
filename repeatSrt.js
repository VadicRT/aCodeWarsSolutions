/**
 * function repeats the given string string exactly n times.
 * @param  {[number]} times  [times to repeat]
 * @param  {[string]} string [given string]
 * @return {[string]}        [description]
 */
function repeatStr(times, string) {
	let newString = '';
	for(let i = 0; i < times; i++) {
		newString += string;
	}
	return newString;
}

console.log(repeatStr(6, 'ha '));
