
var http = require("http");

debugger;
http.createServer(function(request, response){
    
    response.writeHead({'Content-Type':'text/plain'});
    debugger;
    response.end("Hello World\n");
        
}).listen(1337, '127.0.0.1');

console.log('Server runnig at http://127.0.0.1:1337');