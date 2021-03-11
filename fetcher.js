const request = require('request');
const fs = require('fs');
// take the given address from input
const address = process.argv.slice(2,3);
const localPath = process.argv.slice(3);
// create a function that implements request and grabs
const fetcher = (address, destination) => {
  request(address, (error, response, body) => {

    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body.size); // Print the HTML for the Google homepage.
    fs.writeFile(destination, body, () => {
      console.log(address + " Downloaded and saved " +
    // https://nodejs.org/api/fs.html#fs_class_fs_stats
    // to get the size of the received data
    fs.statSync(destination).size +
    " bytes to " + destination);
    });
  });


  
};

fetcher(address[0], localPath[0]);

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html