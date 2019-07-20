
function isPrime(value){
	if(value < 2)
	{
		return false;
	}
  let m = Math.ceil(Math.sqrt(value))
	for(let i = 2; i <= m; ++i)
	{
		if(value%i === 0)
		{
			return false;
		}
	}
	return true;
}



function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2; 
}