
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
      var name = xhttp.responseText.split("/");
      console.log(name);
      updateDom(name);
    }
  };
  xhttp.open("GET", "/endpoint" + "*" + inputtext , true);
  xhttp.send(inputtext);
}, false);

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
