/**
 * a custom compare string without an endsWith method
 * @param  {string} str    target string
 * @param  {string} ending supposed ending of string
 * @return {bool}        in case of detection of this ending
 */
function compareString(str, ending) {
	if(!str.includes(ending)) return false;
	if (!ending.length) return true;

	let string = str.slice(-ending.length);
	return string == ending;

	// return str.endsWith(ending);
}

console.log(compareString('sumo', ''));