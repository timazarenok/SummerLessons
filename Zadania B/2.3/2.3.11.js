function Number11 (n) {
	for(let i = 1; i != n; ++i)
	{
		console.log(i/gcd(i,n)+'/'+n/gcd(i,n));
	} 
}

Number11(10);
	
function gcd (a, b) {
	let c = 0;
	a = a < 0 ? -a : a;
	b = b < 0 ? -b : b;
	if(a < b)
	{
		[a, b] = [b, a];
	}
	while(a%b)
	{
		c = a%b;
		a = b;
		b = c;
	}
	return b;
}

