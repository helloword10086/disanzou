const http = require('http');
const hostname = '127.0.0.1'
const port = 8080;
var server = http.createServer(function(req,res) {
  // 响应头
  res.writeHead(302,{'Location':'http://itbilu.com/'})
  console.log(res._header);
  res.end();
})
server.listen(port)