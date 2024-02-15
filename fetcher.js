const request = require("request");
const fs = require("fs");
// take in URL first AND THEN file path
const url = process.argv[2]; // 2 is the first prompt written in the terminal
const filepath = process.argv[3]; // 3 is the next 

const downloader = function(URL, filepath) {
  request(URL, (error, response, body) => {
  
    if (error) {
      console.log(`${error}, Error!`);
      return;
    }
    if (response.statusCode !== 200) {
      console.log(`Error ${response.statusCode}, failed to retrieve file.`)
      return;
    }
     fs.writeFile(filepath, body, (err) => {
      if (err) {
        console.log(`${err}: Error downloading data`);
        return;
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${filepath}!`);
     })
  })
}

downloader(url, filepath);