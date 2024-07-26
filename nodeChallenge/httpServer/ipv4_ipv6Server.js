const http = require('http'); // This line imports the built-in Node.js http module,
                // which provides functionality for creating HTTP servers and clients.

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});// Sets the HTTP status code to 200 (OK) 
  //and the Content-Type header to text/plain.
  res.end('Hello World!\n');
});

// Listen on IPv4 and IPv6
server.listen(3000, '::', () => {  //'::': Specifies the IPv6 address to listen on (:: means all available IPv6 addresses).

  console.log('Server is running at http://localhost:3000/');
});

//Handle server errors
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  
  switch (error.code) {
    case 'EACCES':
      console.error('Port requires elevated privileges'); //EACCES: Indicates that the server requires
                                              //elevated privileges to start listening on the specified port.
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('Port is already in use');//EADDRINUSE: Indicates that the specified port
                                                // is already in use by another application.
      process.exit(1);
      break;
    default:
      throw error;
  }
});
