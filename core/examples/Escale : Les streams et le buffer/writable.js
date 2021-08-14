var stream = require('stream');
var echoStream = new stream.Writable();
echoStream._write = function (chunk, encoding, done) {
    console.log(chunk.toString());
    done();
};

process.stdin.pipe(echoStream);
