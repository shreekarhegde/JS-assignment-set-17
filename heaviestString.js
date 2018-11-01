function highestScoringWord(a){
    let array = [];
    let index = 0;
	let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let wordArray = a.split(' ');
   const anotherArray = wordArray.slice();
	for(let i = 0; i < anotherArray.length; i++){
        let sum = 0;
        characterArray = wordArray.shift().split('');
        let x = characterArray.slice();
        for(let j = 0; j < x.length; j++){
            console.log(characterArray.length);
            let popped = characterArray.pop();
            index = alphabets.indexOf(popped);
            index++;
            sum = sum + index;   
        }
        array.push(sum);
    }
    let max = anotherArray[array.indexOf(Math.max(...array))];
    return max;
}
console.log(highestScoringWord("bbb cc f aaaaaa"));
console.log(highestScoringWord("there is no place like home")); // "there"
console.log(highestScoringWord("a b c d e f")); // "f"
console.log(highestScoringWord("hello world")); // "world")
