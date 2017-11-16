
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
      console.log(xhttp.responseText);
    }
  };
  xhttp.open("GET", "/endpoint", true);
  xhttp.send(inputtext);
}, false);

// function getData() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var response = JSON.parse(xhttp.responsetext);
//       updateDom();
//       console.log('working');
//     }
//   };
//   xhttp.open("GET", "/wordresult", true);
//   xhttp.send();
// }
