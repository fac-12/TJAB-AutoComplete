var wordArray = ["buffy", "angel", "cordelia", "wesley", "giles", "joyce", "dawn"];

function wordSearch(letter){
  var arrTwo = wordArray.slice(0);
  var finalArr = [];
  for(var i = 0; i < arrTwo.length; i++){
    if(arrTwo[i].indexOf(letter) !== -1 ){
      finalArr.push(arrTwo[i]);
    }
  }
   console.log(finalArr);
}

module.exports = wordSearch;