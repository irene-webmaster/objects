function countLetters(string) {
  var noSpacesString = string.split(" ").join("").toLowerCase();

  var characters = {};

  for(var i = 0; i < noSpacesString.length; i++) {
    var letter = noSpacesString[i];
    if(!characters[letter]) {
      characters[letter] = 1;
    } else {
      characters[letter] += 1;
    }
  }
  return characters;
}

var result = countLetters("lighthouse in the house");
console.log(result);
