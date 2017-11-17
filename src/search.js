var arrayJson = require('./names.json')

var characters = arrayJson["charactersNames"];

var namesArray = (function unCapitalise(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    var name = arr[i].split("");
    name[0] = name[0].toLowerCase();
    var finalName = name.join("");
    newArr.push(finalName);
  }
   return newArr;
}(characters));

var wordSearch = (str) => {
  var string = str.toLowerCase();
  // var arrTwo = namesArray.slice(0);
  var finalArr = [];
  for(var i = 0; i < namesArray.length; i++){
    if(namesArray[i].indexOf(string) !== -1 ){
      finalArr.push(namesArray[i]);
    }
  }
  for (var i = 0; i<finalArr.length; i++){
    var wordSplit = finalArr[i].split(' ');
    for (var j = 0; j<wordSplit.length; j++){
    wordSplit[j] = wordSplit[j].charAt(0).toUpperCase() + wordSplit[j].slice(1);
  }
  wordSplit = wordSplit.join('');
  finalArr[i] = wordSplit;
}
  var nameObj = {
    "result": finalArr,
  }

  return nameObj;
}

module.exports = wordSearch;
