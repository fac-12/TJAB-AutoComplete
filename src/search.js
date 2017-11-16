var wordArray = ["buffy", "angelus", "cordelia", "wesley", "giles", "joyce summers", "dawn"];

function wordSearch(str){
  var string = str.toLowerCase();
  var arrTwo = wordArray.slice(0);
  var finalArr = [];
  console.log(string);
  for(var i = 0; i < arrTwo.length; i++){
    if(arrTwo[i].indexOf(string) !== -1 ){
      finalArr.push(arrTwo[i]);
    }
  }

  for (var i = 0; i<finalArr.length; i++){
    var wordSplit = finalArr[i].split(' ');
    for (var j = 0; j<wordSplit.length; j++){
    wordSplit[j] = wordSplit[j].charAt(0).toUpperCase() + wordSplit[j].slice(1);
  }
  wordSplit = wordSplit.join(' ');
  finalArr[i] = wordSplit;
}
  return finalArr;
}

module.exports = wordSearch;
