const cp = require("child_process");

//cp.execSync('cal')
// cp.execSync('start chrome https://venture.angellist.com/v/login?_ga=2.259968973.612482768.1710512155-1730667696.1710512154')

console.log('Output : '+cp.execSync(`node demo.js`));