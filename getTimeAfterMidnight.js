/**
 * get milliseconds after midnight
 * @param  {number} h hours
 * @param  {number} m minutes
 * @param  {number} s seconds
 * @return {number}   milliseconds after midnight
 */
function past(h, m, s) {
	let midnight = new Date().setHours(0, 0, 0);
	let now = new Date().setHours(h, m, s);
	return Math.round(now - midnight);
}

console.log(past(2,10,10));
