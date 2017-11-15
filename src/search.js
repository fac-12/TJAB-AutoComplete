var wordArray = ["Buffy", "Angel", "Cordelia", "Wesley", "Giles", "Joyce", "Dawn"];

function wordSearch(letter){
  var arrTwo = wordArray.slice(0);
  var finalArr = [];
  for(var i = 0; i < arrTwo.length; i++){
    if(letter === arrTwo[i].charAt(0)){
      finalArr.push(arrTwo[i]);
    }
  }
  return finalArr;
}
