var arrayJson = require('./names.json')

var characters = arrayJson["charactersNames"];

var wordSearch = (str) => {
  console.log(str +"this is string");
  var regex = new RegExp('^'+ str, 'i');
  var finalArr = characters.filter(function(character){
    return character.match(regex);
  })

  var nameObj = {
    "result": finalArr,
  }
  console.log(nameObj);

  return nameObj;
}

module.exports = wordSearch;
