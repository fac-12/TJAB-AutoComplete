var fs = require('fs');
var queryString = require('querystring');
var path = require('path');


function homeHandler(request, response){
  var filePath = path.join(__dirname, '..', 'index.html')
  fs.readFile(filePath, function(error, file){
    if(error){
      return console.log(error);
    }
    response.writeHead(200, 'Content-Type: text/html');
    response.end(file);
  });
}

function staticFileHandler(request, response, url){
  var extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript'
  };

  var extension = url.split('.')[1];
  var filePath = path.join(__dirname, '..', url);

  fs.readFile(filePath, function(error, file){
    if(error){
      response.end('error');
    }
    response.writeHead(200, 'Content-Type: ' + extensionType[extension]);
    response.end(file);
  });
}

function endPointHandler(request, response){
    var letter = '';
    request.on('data', function(data) {
      letter += data;
    });
    request.on('end', function() {
      var postLetter = queryString.parse(letter);
      console.log(postLetter);
      // savePost(convertedData);
      // response.writeHead(308, {
      //   "Location": "/"
      });
      // response.end();
    }



module.exports = {
homeHandler,
staticFileHandler,
endPointHandler,
};
