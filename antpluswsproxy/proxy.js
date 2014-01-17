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

function tcp2ws() {
/*  console.log('proxy mode tcp -> ws');

  var localHost = 'ws://127.0.0.1:8081';
  var sourceHost = '172.18.117.54';
  var sourcePort = 8168;

io.on('connection', function(socket){
  console.log('Socket server created');
  var client = net.connect({ host: "172.18.117.54", port: 8168 }, function() { //'connect' listener
    console.log('Client created');
    client.on('data', function(data) {
      socket.emit('d',data);
    });
    //client.end();
  });
});
*/

var io = require('socket.io').listen(9000);

io.sockets.on('connection', function (socket) {
  socket.emit('d',{'on': true});
  console.log('Socket server created');
 /* var client = net.connect({ host: "172.18.117.54", port: 8168 }, function() { //'connect' listener
    console.log('Client created');
    client.on('data', function(data) {
      socket.emit('d',data);
    });
    //client.end();
  });*/
});
/*  var server = net.createServer(function(s) {
    var ws = new ws_module(localHost);
    
    var state = {
      sReady : false,
      wsReady : false,
      wsBuffer: [],
      sBuffer : []
    };
    initSocketCallbacks(state,ws,s);
  });

  server.on('error', function (e) {
    console.log(e);
  });

  server.listen(sourcePort, sourceHost, function() {
    address = server.address();
    console.log("opened server on %j", address);
  });*/
}

//tcp2ws();
