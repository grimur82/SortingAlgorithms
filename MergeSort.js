/*
	Merge Sort in JavaScript.
*/
function merge(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const left = merge(arr.slice(0, arr.length / 2));
	const right = merge(arr.slice((arr.length / 2), arr.length));
	return mergeSort(left, right);
}

function mergeSort(left, right) {
	const newLst = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		const leftItem = left[leftIndex];
		const rightItem = right[rightIndex];
		if (leftItem < rightItem) {
			newLst.push(leftItem);
			leftIndex += 1;
			continue;
		}
		newLst.push(rightItem);
		rightIndex += 1;
	}

	for (let i = leftIndex; i < left.length; i++) {
		newLst.push(left[i]);
	}

	for (let i = rightIndex; i < right.length; i++) {
		newLst.push(right[i]);
	}

	return newLst;
}

const merger = (arr) => merge(arr);
module.exports = merger;
