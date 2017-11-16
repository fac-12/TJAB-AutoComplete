const http = require('http');
const router = require('./router.js');

const server = http.createServer(router);
var port = process.env.PORT || 3000;
server.listen(port, function(){
  console.log('server running on port 3000');
});
