const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from the other side");
});

server.listen(4000, "127.0.0.1", () => {
    console.log("Server is listening on port 4000");
});
