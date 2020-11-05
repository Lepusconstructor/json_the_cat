const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {//handle request fail like a typo in the url
      return callback(error, null);
    } 
    //if no request fail, but other error like an invalid name
    const data = JSON.parse(body); 
    if (data.length === 0) {//when there is no valid query(breedName) it will show [] on page
    return callback("breed not found", null);
  } 
    return callback(null, data[0].description);
  });
};




module.exports = { fetchBreedDescription };
