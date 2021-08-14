const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously');
    });
});

myEmitter.emit('event', 'a', 'b');

console.log('yolo !');
console.log('yolo !');
setTimeout(() => console.log('haha'),1);
