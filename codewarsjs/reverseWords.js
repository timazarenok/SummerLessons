function reverseWords(str) {
  return str.split(' ').map((el) => {
  	return el = el.split('').reverse().join('');
  }).join(' ');
}


console.log(reverseWords('tima loh'));