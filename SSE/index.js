let sourse = null;
function init () {
    sourse = new EventSource("http://192.168.6.169/comettest/SSE/data.php")
    sourse.onopen = function () {
        console.log('连接已建立', this.readyState)
    }
    sourse.onmessage = function (event) {
        console.log('从后台获取的数据', event.data)
        document.getElementsByTagName('body')[0].innerHTML =  document.getElementsByTagName('body')[0].innerHTML + event.data + '<br/>'
    }
    sourse.onerror = function (event) {
        console.log('出错信息', this.readyState)
    }
}
init()