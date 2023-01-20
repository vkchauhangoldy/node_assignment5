var http = require("http");
const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if (req.url == '/welcome') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.write('Welcome to Dominos!');
        res.end();
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }));
        res.end();
    }
    else {
        res.end('Invalid Request 404.....!')
    }
}
module.exports = httpServer;
httpServer.listen(8081);
