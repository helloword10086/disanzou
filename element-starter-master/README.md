大前端全站开发思路


在前端vue 新建一个server

前后端分离
src前端

后端就负责 API 服务 

1. 后端在3000，端口，未来等着ngnix 80 -> 3000
2. /api API服务，等着前端调用/ vue 打包好的dist 目录index.html readFile 返回
前端一般在8080端口上 vue-router vuex axios
3. 前后端联调。api 数据 -》 veu

4. 跨域  domain 域名， 端口，cross domain  前端不允许 安全问题， 前端考虑，页面上显示的安全 前端面试最重要的
后端考虑
- 前端 domain ：port  subdomain 都一样 js同源机制， 同样的源是值得依赖的  前端 8080：3030 跨域 不夸， feth('/api/user/login) 404 3000 /api/ proxy 代理 target:http://
发出去的请求也不夸
