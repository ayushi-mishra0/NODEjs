// Import the 'events' module from Node.js
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the connectHandler function
function connectHandler() {
    console.log('connection established');
    // Emit the 'data_received' event
    eventEmitter.emit('data_received');
}

// Add the event listener for the 'connection' event
eventEmitter.on('connection', connectHandler);

// Add the event listener for the 'data_received' event
eventEmitter.on('data_received', () => {
    console.log('data received');
});

// Emit the 'connection' event
eventEmitter.emit('connection');
