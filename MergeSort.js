/*
	Merge Sort in JavaScript.
*/
function merge(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const left = merge(arr.slice(0, arr.length / 2));
	const right = merge(arr.slice((arr.length / 2), arr.length));
	const leftIterator = mergeHelper(left)
	const rightIterator = mergeHelper(right)
	return mergeSort(leftIterator,rightIterator);
}

function mergeSort(leftIterator, rightIterator) {
	const newLst = [];
	let leftItem = leftIterator.next()
	let rightItem = rightIterator.next()
	while (!leftItem.done && !rightItem.done) {
		if (leftItem.value < rightItem.value) {
			newLst.push(leftItem.value);
			leftItem = leftIterator.next();
			continue;
		}
		newLst.push(rightItem.value);
		rightItem = rightIterator.next();
	}
	
	while(!leftItem.done){
		newLst.push(leftItem.value);
		leftItem = leftIterator.next()
	}

	while(!rightItem.done){
		newLst.push(rightItem.value);
		rightItem = rightIterator.next()
	}

	return newLst;
}

function* mergeHelper(items) {
	yield* items;
}

const merger = (arr) => merge(arr);
module.exports = merger;
