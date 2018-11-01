function canSellTickets(array) {
	let count1 = 0;
	let count2 = 0;
	let count3 = 0;
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if(array[0] > 25){
			return 'NO';
		}
		if (array[i] == 25) {
			count1 = count1 + 1;
		} else if (array[i] == 50 && count1 > 1) {
			count2 = count2 + 1;
		} else if (array[i] == 100 && ((count2 > 0 && count1 > 0) || count1 > 2)) {
			count3 = count3 + 1;
		}
		if (array[i + 1] == 25) {
			sum = sum + array[i + 1];
		} else if (array[i + 1] == 50 && count1 > 0) {
			sum = sum + array[i + 1];
			count1--;
		} else if (array[i + 1] == 100) {
			if (count1 > 3) {
				sum = sum + array[i + 1];
				sum = sum - 75;
				count1 = count1 - 3;
			}else if(count1 > 1 && count2 > 1){
				sum = sum + array[i + 1];
				sum = sum - 75;
				count1 = count1 - 2;
				count2 = count2 - 1;
			}
			return 'NO'
		}
	}
	return 'YES';
}

console.log(canSellTickets([])); // "YES"

console.log(canSellTickets([25])); // "YES"

console.log(canSellTickets([50])); // "NO"

console.log(canSellTickets([100])); // "NO"

console.log(canSellTickets([25, 50])); // "YES"

console.log(canSellTickets([25, 100])); // "NO"

console.log(canSellTickets([25, 25, 25, 25, 50, 100])); // "YES"

console.log(canSellTickets([25, 25, 50, 100])); // "YES"

console.log(canSellTickets([25, 25, 25, 100])); // "YES"

console.log(canSellTickets([25, 50, 50, 25])); // "NO"

console.log(canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 50, 100])); // "YES"

console.log(canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 100, 100])); // "NO"