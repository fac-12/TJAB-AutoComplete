var {staticFileHandler, homeHandler} = require('./handlers.js');


function router(request, response, url){
  var url = request.url;
  if(url === '/'){
    homeHandler(request, response);
  } else {
    staticFileHandler(request, response, url);
  }
};

module.exports = router;
