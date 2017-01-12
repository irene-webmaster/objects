function countLetters(string) {

  var characters = {};

  for(var i = 0; i < string.length; i++) {
    var letter = string[i];
    if(letter === " ") {
      continue;
    } else if(!characters[letter]) {
      characters[letter] = [i];
    } else {
      characters[letter].push(i);
    }
  }

  return characters;
}

var result = countLetters("lighthouse in the house");
console.log(result);
