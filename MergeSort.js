/*
	Merge Sort in JavaScript.
*/
// Split the array down to one.
function merge(arr){
	if(arr.length <=1){
		return arr;
	}
	else{		
		var left = merge(arr.slice(0,arr.length/2));
		var right = merge(arr.slice((arr.length/2), arr.length));	
		return mergeSort(left,right);
	}
}
// Sort the array.
function mergeSort(left,right){
	var newLst = [];
	while(left.length > 0 && right.length >0){
		if(left[0] <= right[0]){
			newLst.push(left.shift());
		}
		else{
			newLst.push(right.shift());
		}
	}
	while(left.length != 0){
		newLst.push(left.shift());
	}
	while(right.length !=0){
		newLst.push(right.shift());
	}
	return newLst;
}