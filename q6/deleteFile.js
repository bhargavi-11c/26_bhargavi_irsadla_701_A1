const fs = require("fs");

function deleteFilePromise(filePath) {
  return new Promise(function(resolve, reject) {
    fs.unlink(filePath, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve("File deleted");
      }
    });
  });
}

fs.writeFileSync("test.txt", "hello");

deleteFilePromise("test.txt")
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.log("Error:", err.message);
  });
