const request = require('request');
const arg = process.argv.slice(2);
const breedName = arg[0];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


  request(url, (error, response, body) => {
    if (error) {
      console.log(`Request failed: ${error}`);
    } else {
      const data = JSON.parse(body); 
      if (data.length === 0) {//when there is no query(breedName) it will show [] on page
        console.log("breed not found");
      } else {
        console.log(data[0].description);
      }
    } 
});

