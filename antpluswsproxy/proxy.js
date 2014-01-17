var net = require('net');

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer();
server.listen(9000);

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    setInterval(function() {
      ['1','2','3','4'].forEach(function(id) {
        connection.sendUTF('<HeartRate id="' + id + 'h" BPM="' + parseInt((Math.random()*90 + 40)) + '" timestamp="' + Date.now() + '"/>');
      });
    }, 2000);
    
    /*
    var client = net.connect({ host: "172.18.117.54", port: 8168 }, function() { //'connect' listener
      console.log('Client created');
      client.on('data', function(data) {
        connection.sendUTF(data);
      });
    });*/
    connection.on('close', function(connection) {
        // close user connection
    });
});


