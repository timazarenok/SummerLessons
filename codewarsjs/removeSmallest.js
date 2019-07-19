function removeSmallest(numbers) {
	console.log(numbers);
	let temp = numbers[0];
	let index = 0;
	let numbers2 = numbers;
	for(let i = 0; i != numbers.length; ++i) {
		if(temp > numbers[i+1]) {
			index = i;
			temp = numbers[i];
		}
	}
	numbers2.splice(index, 1);
	console.log(numbers2);
	return numbers = numbers2;

}

console.log(removeSmallest([183, 358, 153, 237]));


const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));