理论支持

SPA 单页应用开发， 导航不够nav不动， footer也不动， 中间body(main,conten) 是切换的 ， 页面不需要刷新的  传统web开发中， 空白（新的web）页请求
白一下加载一下， 体验糟糕 对应路由， 把相应的组件切换出来， 像app一样


- jquery on 事件api $(document).on(event_type,child_nodes,fn);

- 前端路由二种做法，hashtag # history pushState api url path部分改变了，但是没有刷新页面

state ? 这次跳转url对应的状态数据， title, url