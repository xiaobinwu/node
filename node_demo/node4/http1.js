// 作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应
var http = require('http');
var url = require('url');
http.createServer(function (request, response) {
    var body = [];
    var tmp = request.url;
    console.log(url.parse(tmp));
    console.log(request.method);
    console.log(request.headers);

    request.on('data', function (chunk) {
        body.push(chunk);
    });

    request.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
}).listen(80);

console.log('Server running at http://127.0.0.1:8124/');