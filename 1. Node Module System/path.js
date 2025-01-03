const path = require("path");

console.log(path);

let baseName = path.basename("/Users/mr.vikas/Desktop/Node js Scaller/11.txt");

let ext = path.extname(`/Users/mr.vikas/Desktop/Node js Scaller/11.txt`);
console.log(ext);
console.log(baseName)
console.log(__filename);
console.log(__dirname);