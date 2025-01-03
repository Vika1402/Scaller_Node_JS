const figlet = require("figlet");

figlet("Hello Vikas", (err, data)=> {
  if (err) {
    console.log("something went wrongs");
  } else {
    console.log(data);
  }
});

