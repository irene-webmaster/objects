function countLetters(string) {
  var noSpacesString = string.split(" ").join("").toLowerCase();

  var characters = {};

  var letter = "h";

  var tracker = 0;


  for(i = 0; i < noSpacesString.length; i++) {
    if(noSpacesString[i] === noSpacesString[a]) {
      tracker++;
    }

  }
  console.log(tracker);
  // characters[noSpacesString[i]] = tracker;


  console.log(characters);
  // return noSpacesString;
}

var result = countLetters("lighthouse in the house");
// console.log(result);
