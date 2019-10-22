const express = require('express');
const app = express();
const server = app.listen(3000)
const path = require('path');
const io = require('socket.io').listen(server);
app.use(express.static(path.join(__dirname, 'src')))
app.get('/', function (req, res, err) {
    res.sendFile(path.resolve(__dirname + '/src/index.html'))
})
let item = 1
io.on('connection', function (socket) {
    // 确认客户端的连接
    socket.emit('open');
    // 服务器接收到客户端的消息
    socket.on('message', function (msg) {
        console.log(msg)
        setInterval(()=>{
            item++
        // 发送给客户端的消息
            socket.emit('test', item)
        // 进行全局广播
            socket.broadcast.emit('test', item)
        },1000)
    });
    // 断开连接
    socket.on('disconnect', function () {
        console.log('断开连接')
    });
})