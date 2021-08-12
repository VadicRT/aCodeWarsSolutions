function repeatStr(times, string) {
	let newString = '';
	for(let i = 0; i < times; i++) {
		newString += string;
	}
	return newString;
}

console.log(repeatStr(6, 'ha '));
