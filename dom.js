
var inputfield = document.getElementById('inputfield');
inputfield.addEventListener('keydown', function(e){
  console.log(e);
  if (e.code.indexOf('Key') !== -1 || e.code.indexOf('Digit') !== -1){
    var inputtext = inputfield.value + e.key;
  } else {
    var inputtext = inputfield.value
  }
  console.log(inputtext);
  // var inputtext = e.srcElement.value + e.key;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var name = JSON.parse(xhttp.responseText);
      var finalNames = name.result;
      updateDom(finalNames);
    }
  };
  xhttp.open("GET", "/endpoint" + "=" + inputtext , true);
  xhttp.send(inputtext);
}, false);


var submitform= document.getElementById('the-form');
submitform.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e);
  var actress = e.srcElement[0].value;
  console.log(e.srcElement[0].value);
  var characters = {
    "Buffy Summers": "sarah+michelle+gellar",
    "Angel" : "david+boreanaz",
    "Willow Rosenberg": "alyson+hannigan",
    "Spike": "james+marsters",
    "Dawn Summers": "michelle+trachtenberg",
    "Rupert Giles": "anthony+head",
    "Cordelia": "eliza+dushku"
  }
  var actress = characters[e.srcElement[0].value];
  console.log(e.srcElement[0].value);
  // if(actress){


  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(xhr.responseText);
      console.log(obj);
      var info = obj["name_popular"][0]["description"];
      console.log(info);
      updateInfo(info);

    }
  };
  xhr.open("GET", 'https://cors-anywhere.herokuapp.com/http://www.imdb.com/xml/find?json=1&nr=1&nm=on&q='+actress , true);
  xhr.send();
}, false);
// }



function updateDom(name){
  var dataList = document.getElementById('dropdown');
  while(dataList.firstChild){
    dataList.removeChild(dataList.firstChild);
  }
  for(var i = 0; i < name.length; i++){
    var option = document.createElement('option');
    option.value = name[i];
    dataList.appendChild(option);
  }
}

function updateInfo(info) {
  console.log(info);
  var divElement = document.getElementById('info');
  while(divElement.firstChild){
    divElement.removeChild(divElement.firstChild);
  }
  var para = document.createElement('p');
  var infotext = document.createTextNode(info);
  para.appendChild(infotext);
  divElement.appendChild(para);
  divElement.className('info');


}
