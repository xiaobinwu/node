var url = require("url");
var urls = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

console.log(JSON.stringify(urls));