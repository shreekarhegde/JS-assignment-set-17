
function inversion(a) {
    let count = 0;
for(let i = 0; i < a.length; i++){
    for(let j = i ; j < a.length; j++){
        if(a[i] > a[j]){
            count++;
        }
    }
}
return count;
}


console.log(inversion([8, 6, 6, 1, 1, 1, 3, 4, 2])); // 22
console.log(inversion([3, 3, 3, 2, 2, 1])); //11
console.log(inversion([2, 2, 1, 1])); //4
console.log(inversion([])); //0
console.log(inversion([5,3,4,1,2])); //8
console.log(inversion([1, 3, 2])); //1