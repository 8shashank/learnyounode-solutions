var net=require('net');
var formatdate=require('strftime');

var server=net.createServer(function (socket) {
    socket.end(formatdate("%Y-%m-%d %k:%M"));
}); //TCP server
server.listen(process.argv[2]);