var http = require("http");
http.createServer(function (req, res) {
  var path = req.url.toLowerCase();

  switch (path) {
    case "/": // The default path
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Aloha world");
      break;

    case "/about": // The default path
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About me");
      break;

    default: // Random paths you shouldn't go to!!
      // The classic 404 message we all know and love!
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found! OOPS!");
  }

}).listen(process.env.PORT || 3000);
