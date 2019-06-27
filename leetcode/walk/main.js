// live-server

//<script></script>   引入模块文件
//reuire 请求COMMONJS 模块化方案
const http = require('http');
const https = require('https');
//web 服务 在软件上理解理解就是一个http访问的服务
  let i = 0;
http.createServer(function(request, response){
   
    i++;
    response.end(`hello world${i}`)
}).listen(3000);
     
//npmvx_share shun