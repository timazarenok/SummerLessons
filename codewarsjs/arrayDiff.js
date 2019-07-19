function array_diff(a, b) {
	return a.map((el) => {
		return !b.includes(el) ? el : null;
	}).filter((el) => {
		return el != null
	});
}

console.log(array_diff([1,2,5,3], [1,2]))

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}