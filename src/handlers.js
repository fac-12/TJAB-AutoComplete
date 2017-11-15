var fs = require('fs');
var querystring = require('querystring');
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

// function endPointHandler(request, response){
//     var letter = '';
//     request.on('data', function(chunkofData) {
//       allTheData += chunkofData;
//     });
//     request.on('end', function() {
//       var convertedData = queryString.parse(allTheData);
//       console.log(convertedData);
//       savePost(convertedData);
//       response.writeHead(308, {
//         "Location": "/"
//       });
//       response.end();
//     });
// }


module.exports = {
homeHandler,
staticFileHandler,
};
