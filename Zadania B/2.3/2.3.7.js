function Number7 (a, b) {
	let denum = gcd(a,b);
	a = a/denum;
	b = b/denum;
	console.log(a+'/'+b);
}

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

Number7(-3,9);