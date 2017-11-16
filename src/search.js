var wordArray = ["buffy", "angel", "cordelia", "wesley", "giles", "joyce", "dawn"];

function wordSearch(str){
  str = str.toLowerCase();
  var arrTwo = wordArray.slice(0);
  var finalArr = [];
  for(var i = 0; i < arrTwo.length; i++){
    if(arrTwo[i].indexOf(str) !== -1 ){
      finalArr.push(arrTwo[i]);
    }
  }
   return finalArr;
}

module.exports = wordSearch;
