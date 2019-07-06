const reducer = (accumulator, currentValue) => accumulator + currentValue;
function Number9 (value, k) {
	let temp = 0;
	let array1 = new Array();
	for(; parseInt(value) != 0; value/=10)
	{
		temp = parseInt(value%10);
		array1.push(temp);
	}
	let sum1 = array1.slice(0, k).reduce(reducer);
	let size = array1.length - k;
	let sum2 = array1.slice(size, array1.length).reduce(reducer);
	if(sum1 === sum2)
	{
		return true;
	}
	return false;
}

console.log(Number9(678567, 4));