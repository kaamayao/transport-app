const faker = require('faker/locale/es');

module.exports = function getLocations () {
  faker.seed(123);
  let locations = [];
  for (let id = 0; id < faker.random.number({min: 0, max: 30}); id++) {
    locations.push({
      "id": id,
      "from": { latitude: faker.address.latitude(),longitude: faker.address.longitude()},
      "to": { latitude: faker.address.latitude(),longitude: faker.address.longitude()},
      "duration": faker.random.number()
    });
  }

  return locations;
}
