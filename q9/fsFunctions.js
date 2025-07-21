const fs = require("fs");

fs.writeFileSync("data.txt", "This is original content");

let content = fs.readFileSync("data.txt", "utf8");
console.log("Read:", content);

fs.appendFileSync("data.txt", "\nThis is appended content");

let updated = fs.readFileSync("data.txt", "utf8");
console.log("After Append:", updated);

fs.renameSync("data.txt", "newData.txt");
console.log("File renamed");

fs.unlinkSync("newData.txt");
console.log("File deleted");
