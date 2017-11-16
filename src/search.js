var arrayJson = require('./names.json')

var namesArray = arrayJson["charactersNames"];

var wordSearch = (str) => {
  console.log(str);
  var string = str.toLowerCase();
  // var arrTwo = namesArray.slice(0);
  var finalArr = [];
  console.log(string);
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
  wordSplit = wordSplit.join(' ');
  finalArr[i] = wordSplit;
}
  return finalArr;
}


module.exports = wordSearch;
