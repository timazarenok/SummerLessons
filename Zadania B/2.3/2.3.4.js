const factorial = function fac(n){return n < 2 ? 1 : n * fac(n-1);}
function Number4 (n) {
	for(let i = 0; i != 100; ++i)
	{
		if((i*(i+1)*(i+2) === factorial(n)))
		{
			return true;
		}
	}
	return false;
}

console.log(Number4(4));