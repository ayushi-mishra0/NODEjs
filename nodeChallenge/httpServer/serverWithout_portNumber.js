const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Extract the host name from the Host header
  const host = req.headers.host;

  // Handle incoming request
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`Hello from ${host}\n`);
  res.end('Welcome to my server!\n');
});

// Listen on port 80 (HTTP default)
server.listen(80, () => {
  console.log('Server is running on http://localhost/');
});

// Handle server errors
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error('Port 80 requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('Port 80 is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
