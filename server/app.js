// var io = require("socket.io")();

var log = require("./log.js");

function init(httpServer)
{
	// TODO: add WebSocket (socket.io) endpoints or other light non-HTTP backend connections here as necessary (or move to a real app framework for Node like Express)
	// io.attach(httpServer);

	log("Web application initialized");
};

/*
io.on("connection", function (socket)
{
	// ...
});
*/

module.exports.init = init;
