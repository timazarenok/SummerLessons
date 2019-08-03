function wave(str){
  let arr = new Array();
  for(let i = 0; i != str.length; ++i) {
  	if(str[i] === ' ') {
  		continue;
  	}
  	temp = str.split('').map((el, index) => {
  		return index === i ? el.toUpperCase() : el;
  	}).join('')
  	arr.push(temp);
  }
  return arr;
}

console.log(wave('two words'));



export function wave(str: string): Array<string> {
  return str.split("").reduce((wave, char, index) => {
    if (char === " ") {
      return wave;
    }
    wave.push(
      str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
    );
    return wave;
  }, [])
}