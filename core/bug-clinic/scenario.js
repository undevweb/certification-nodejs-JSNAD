// scenario.js
var fs = require("fs");

var peach = function (obj) {
    console.log('traced',obj);
};

var bowser = function (callback) {
    fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
};

var koopa = function (error, file) {
    // handle error by printing something to stderr
    console.error('something to stderr',error);
    peach(JSON.parse(file));
};

bowser(koopa);
