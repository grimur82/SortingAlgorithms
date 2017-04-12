/*
	Merge Sort in JavaScript.
*/
// Split the array down to one.
function merge(arr){
	if(arr.length <=1){ // Base case. replace current stack frame with value when one or less is left.
		return arr;
	}
	else{		
		var left = merge(arr.slice(0,arr.length/2)); // Add to stack frame the left array divided by 2
		var right = merge(arr.slice((arr.length/2), arr.length)); // Add to	stack frame the right array divided by 2
		return mergeSort(left,right); // Merge variable left and right to sort in mergeSort function.
	}
}
// Sort the array.
function mergeSort(left,right){
	var newLst = [];
	while(left.length > 0 && right.length >0){ // Compare left and right list. Push to newLst. Stop if one of them has no value.
		if(left[0] <= right[0]){
			newLst.push(left.shift());
		}
		else{
			newLst.push(right.shift());
		}
	}
	// If any values in left list, add to newLst 
	while(left.length != 0){
		newLst.push(left.shift());
	}
	// If any values in right list, add to newLst
	while(right.length !=0){
		newLst.push(right.shift());
	}
	return newLst; // return sorted list.
}