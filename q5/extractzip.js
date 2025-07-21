const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const app = express();
const port = 3000;

// create folders if not there
const uploadFolder = 'uploads';
const extractFolder = 'extracted';

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

if (!fs.existsSync(extractFolder)) {
  fs.mkdirSync(extractFolder);
}

// multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// home page to upload zip
app.get('/', (req, res) => {
  res.send(`
    <h2>Upload Zip File</h2>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="myzip" />
      <button type="submit">Upload</button>
    </form>
  `);
});

// upload and extract route
app.post('/upload', upload.single('myzip'), (req, res) => {
  let zipPath = req.file.path;
  let zipName = path.parse(req.file.filename).name;
  let outputPath = path.join(extractFolder, zipName);

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  // using system unzip command
  exec(`unzip -o ${zipPath} -d ${outputPath}`, (err, stdout, stderr) => {
    if (err) {
      console.log('Error:', err);
      res.send('Something went wrong while extracting');
    } else {
      res.send('Zip file extracted to folder: ' + outputPath);
    }
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
