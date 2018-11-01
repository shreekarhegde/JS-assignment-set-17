function reverseVowels(s) {
  let string = "";
  let storeLength = s.length - 1;
  let array = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  for (var i = 0; i < s.length; i++) {
    if (array.includes(s.charAt(i))) {
      for (var j = storeLength; j >= 0; j--) {
        if (array.includes(s.charAt(j))) {
          string += s.charAt(j);
          storeLength = j - 1;
          break;
        }
      }
    } else {
      string += s.charAt(i);
    }
  }
  return string;
};

console.log(reverseVowels('hello amazon'));