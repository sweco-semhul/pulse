var net = require('net');

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer();
server.listen(9000);

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

var getFakeBPM = function(id) {
  var val = parseInt((Math.random()*90 + 40));
  if(val > 120)
    return '<HeartRate id="' + id + '" BPM="' + val  + '" timestamp="' + Date.now() + '"/>';
  else
    return '<SensorDrop id="' + id + '" timestamp="' + Date.now() + '"/>';
}

// WebSocket server
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    setInterval(function() {
      ['15084h','45752h','4h'].forEach(function(id) {
        connection.sendUTF(getFakeBPM(id));
      });
    }, 500);
    
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


