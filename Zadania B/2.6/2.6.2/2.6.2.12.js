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

function Fibonachi () {
	let array = new Array();
	array[0] = 1;
	array[1] = 1;
	for(let i = 2; i != 30; ++i)
	{
		array[i] = (array[i-1] + array[i-2]);
	}
	return array;
}


function Number12 (k) {
	let array1 = new Array();
	let array = Fibonachi();
	for(let i = 0; i != array.length; ++i)
	{
		if(SimpleNumber(array[i])){
			array1.push(array[i])
		}
	}
	return array1[k-1];
}

console.log(Number12(4));