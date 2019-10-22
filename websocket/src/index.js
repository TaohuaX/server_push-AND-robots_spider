$(function () {
    let socket = io.connect('http://localhost:3000')
    socket.on('open', function () {
        console.log('客户端页面已连接')
        socket.send('我是用户名')
    })
    socket.on('test', function (msg) {
    let htmlContent = document.getElementsByTagName('body')[0].innerHTML
        console.log(`用户${msg}说：我是第${msg}个人<br/>`)
        document.getElementsByTagName('body')[0].innerHTML = htmlContent + `用户${msg}说：我是第${msg}个人<br/>`
    })
    socket.on('error', function () {
        console.log('连接失败了')
    })
})