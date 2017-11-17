var fs = require('fs');
var queryString = require('querystring');
var path = require('path');
var wordSearch = require("./search.js");

function homeHandler(request, response){
  var filePath = path.join(__dirname, '..', 'index.html')
  fs.readFile(filePath, function(error, file){
    if(error){
    response.writeHead(500,'Content-Type:text/plain');
    response.end('server error');
      // return console.log(error);
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
      response.writeHead(404,'Content-type:text/plain');
      response.end('Error:404, page not found');
      // response.end('error');
    }
    response.writeHead(200, 'Content-Type: ' + extensionType[extension]);
    response.end(file);
  });
}

function endPointHandler(request, response){
        var text = request.url;
        const parsed = queryString.parse(text);
        console.log(parsed['/endpoint']);
        var result = wordSearch(parsed['/endpoint']);
        response.writeHead(200,{'Content-Type': 'application/json'}, function (error){
        if (error){
            console.log('endPointHandler ' + error);
            return;
            }
          });
        console.log(result);
        response.end(JSON.stringify(result));
    };

function apiHandler(request, response){

}






module.exports = {
homeHandler,
staticFileHandler,
endPointHandler,
apiHandler,
};
