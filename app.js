var http = require('http')
var app = http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("socked-node is up!\n");
});

// Reference:
// https://github.com/sockjs/sockjs-node/blob/master/examples/test_server/sockjs_app.js
var sockjs = require('sockjs');
var sockjs_opts = {
	sockjs_url : "http://cdn.sockjs.org/sockjs-0.2.min.js",
	websocket: false
};
var sockJSServer = sockjs.createServer(sockjs_opts);

var sockjsHandler = require('./src/sockjsHandler.js')
sockJSServer.on('connection', sockjsHandler.handle);
sockJSServer.installHandlers(app, {
	prefix : '/sockjs'
});

app.listen(process.env.PORT || process.env.VCAP_APP_PORT || 8080);
