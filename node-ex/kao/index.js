const koa = require('koa')

const app = new koa()

app.use((ctx,next) =>{
  console.log(ctx.request.url)
  ctx.body='2222'
  // next()
})


app.listen(8080)