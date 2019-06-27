const http = require('http');
const hostname = '127.0.0.1'
const port = 8080;
var server = http.createServer(function(req,res) {
  // 响应头
   res.statusCode = 200;
   res.setHeader('Content-Type','text/plain');
   res.end('hello World')
})
server.listen(port)