console.log("Directory:", __dirname);
console.log("File:", __filename);

setTimeout(function () {
  console.log("This message shows after 2 seconds");
}, 2000);

setInterval(function () {
  console.log("This message repeats every 3 seconds");
}, 3000);

global.myName = "bhargavi";
console.log("Name from global object:", global.myName);
