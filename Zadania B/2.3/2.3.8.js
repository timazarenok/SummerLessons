function Number8(a, b){
	let denum = gcd(a,b);
	a = a/denum;
	b = b/denum;
	for(let i = 1; i != a+1; ++i)
	{
		console.log(i+'/'+b);
	}
}

Number8(5,7);

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
