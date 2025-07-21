var fs = require("fs");
var zlib = require("zlib");
fs.createReadStream('test1.txt').pipe(zlib.createGzip())
.pipe(fs.createReadStream('test1.zip'))
console.log("Zip file is created !");
