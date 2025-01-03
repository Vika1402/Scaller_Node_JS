const fs = require("fs");
//read
// let fileContent = fs.readFileSync("11.txt");
// console.log("from 11 " + fileContent);

// //write

// fs.writeFileSync("12.txt", "hello world from 12 and 13");

// console.log();

// fs.appendFileSync("12.txt", "hai shri ram ram ram ram ji ");

// console.log("ok");
// for (let i = 0; i < 6; i++) {
//   fs.createWriteStream(`${i}.txt`);
// }

// console.log("ok");

let folderConntent = fs.readdirSync(
  "/Users/mr.vikas/Desktop/Node js Scaller/myDirectory"
);
console.log(folderConntent);
