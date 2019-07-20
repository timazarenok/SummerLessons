function divisors(integer) {
	if(integer <= 1){
		return [];
	}
	if(SimpleNumber(integer)) {
		return `${integer} is prime`;
	}
	let array = [];
  for(let i = 2; i != integer; ++i) {
  	if(integer%i == 0) {
  		array.push(i);
  	}
  }
  return array;
};


function SimpleNumber(value){
	if(value == 1)
	{
		return false;
	}
	for(let i = 2; i != value; ++i)
	{
		if(value%i == 0)
		{
			return false;
		}
	}
	return true;
}

console.log(divisors(13));

// ............................................
function divisors(integer) {
  var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};
