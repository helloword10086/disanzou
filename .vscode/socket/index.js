import express from 'express'
import morgan from 'morgan'
import path from 'path'
import socketIO from 'socket.io'
 const app = express()
 app.set('views',path.resolve(__dirname,'scok'))
 app.set('view engine','ejs')
 app.use(morgan('dev'))
 app.get('/',(request,response)=>{
     response.render('index')
    
 
    })
    let server = app.listen(3000,()=>{
        console.log('666666')
    })
let io = socketIO(server)
io.on('connection', (socket) =>{
    console.log('connected')
    socket.on('disconnect',() =>{
        console.log('disc')
    })
    socket.on('message', (msg) =>{
        io.emit('message', msg)
    })
})

// var http = require('http')
// http.createServer(function(request,response){
//     response.writeHead(200, {'content-Type': 'text/plain'})
//     response.end('hello world')
// }).listen(8080)

// console.log('66666')