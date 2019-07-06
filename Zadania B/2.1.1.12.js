const reducer = (accumulator, currentValue) => accumulator + currentValue;
function Number11 (value, k) {
	let temp = 0;
	let array1 = new Array();
	for(; parseInt(value) != 0; value/=10)
	{
		temp = parseInt(value%10);
		array1.push(temp);
	}
	let count = 0;
	let size = array1.length - 2;
	let sum2 = array1.slice(size, array1.length).reduce(reducer);
	for(let i = 0; i != array1.length; ++i)
	{
		if(array1[i] > sum2)
		{
			count++;
		}
	}
	return count > k;
}

console.log(Number11(12789, 2));