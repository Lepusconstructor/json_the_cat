//This is the file we'll be running
const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {//we use request wich fetch result async, the new fetch function also needs to be async, it should therefore accept a callback cuz async can't simply return data.
if (error) {
  console.log('Error fetch details: ',error);
} else {
  console.log(description);
}
});
