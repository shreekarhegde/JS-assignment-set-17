function findGreaterNumbers(a){
	let x = 0;
	for(let i = 0; i < a.indexOf(Math.max(...a)); i++){
    x = i; 
    }
    if(x == 0){
        return x;
    }else{
        return x+2;
    }
  
}

console.log(findGreaterNumbers([5,4,3,2,1]));//0
console.log(findGreaterNumbers([6,1,2,7]));//4
console.log(findGreaterNumbers([1,2,3])) // 3

