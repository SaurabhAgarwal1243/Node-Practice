var http = require('http')
var myserver = http.createServer(function (request,response) {
    response.writeHead(200, {"Content-type": "text/html"})
    response.write("<b>hello</b> World");
    response.end();
});

myserver.listen(3000);