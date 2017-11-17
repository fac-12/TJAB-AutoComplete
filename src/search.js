var arrayJson = require('./names.json')

var characters = arrayJson["charactersNames"];

var wordSearch = (str) => {
  var regex = new RegExp('^'+ "[" + str + "]", 'i');
  var finalArr = characters.filter(function(character){
    return character.match(regex);
  })

  var nameObj = {
    "result": finalArr,
  }

  return nameObj;
}

module.exports = wordSearch;
