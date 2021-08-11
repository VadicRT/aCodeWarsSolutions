/**
 * get the number of vowels in the given string
 * @param  {[string]} str [description]
 * @return {[number]}     [count of vowels]
 */
function getCount(str) {
  var vowelsCount = 0;
  
  for(let letter of str) {
    if(
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u"
      ) {
          vowelsCount++;
        }
  }
  
  return vowelsCount;
}


console.log(getCount("o a kak ushakov lil vo kashu kakao"));