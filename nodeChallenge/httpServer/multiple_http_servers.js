const http = require('http');

// Array to hold server instances
const servers = [];

// Function to create a server
function createServer(port) {
  const server = http.createServer((req, res) => {
    // Extract the host name from the Host header
    const host = req.headers.host;

    // Handle incoming request
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Hello from server on port ${port}, ${host}\n`);
    res.end('Welcome to my server!\n');
  });

  // Listen on the specified port
  server.listen(port, () => {
    console.log(`Server on port ${port} is running`);
  });

  // Handle server errors
  server.on('error', (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    switch (error.code) {
      case 'EACCES':
        console.error(`Port ${port} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`Port ${port} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  });

  return server;
}

// Create multiple servers on different ports
const portNumbers = [3000, 4000, 5000];
portNumbers.forEach(port => {
  const server = createServer(port);
  servers.push(server);
});

// Global error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.message);
  process.exit(1);
});

// Gracefully shutdown servers on process termination
process.on('SIGINT', () => {
  servers.forEach(server => server.close());
  console.log('Servers gracefully shutdown');
  process.exit(0);
});
