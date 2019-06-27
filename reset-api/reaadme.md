fullstack 全栈

Front Enginner

Backend /api


restful api
浏览器与服务器通信方式的一直设计风格
- restful 的世界里， 一切皆资源

- url 来唯一定位资源的识别符

/posts/:id/commments
- 添加一条评论怎么办
{
  id:2,
  body: ''
}
/comments  设计好url Post

- 设计有意义的URL 资源 状态改变吗
Post/comments 加一条评论 id：2
修改一下内容   
  Put  /comment/2 body: '最美不过下雨天，。'


  操作   SQL 方法  HTTp的动词

  CREATE  INSERT   post

  READ SELECT       GEt

  UPDATE UPDATE   PUT/PATCH{body: '',PostID:1}
  put 完整的部分
  PATHCH 只要给一部分 
  DLETE

  状态 切换 ， 使用定义的谓语动词