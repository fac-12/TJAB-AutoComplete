var {staticFileHandler, homeHandler, endPointHandler, apiHandler} = require('./handlers.js');


function router(request, response, url){
  var url = request.url;
  console.log(url + "URL");
  if(url === '/'){
    homeHandler(request, response);
    }
    else if (url.indexOf('/endpoint') !== -1){
    endPointHandler(request, response);
   }
   else if(url === ('/wikiname')){
     apiHandler(request, response);
   } else {
    staticFileHandler(request, response, url);
   }

};

module.exports = router;
