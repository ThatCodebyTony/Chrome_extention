const fs = require('fs')
const path = './index.js';

fs.readFile(path, 'utf8',(err,data)=> {
  if(err) {
    console.error("Error reading the file:", err);
  } else {
    console.log("File contents", data);
  }
});