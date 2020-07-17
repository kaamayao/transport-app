const faker = require('faker/locale/es');

module.exports = function getLocations () {
  faker.seed(123);
  let locations = [];
  for (let id = 0; id < 100; id++) {
    locations.push({
      "id": id,
      "from": { latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        name: faker.address.streetName()
      },
      "to": { latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        name: faker.address.streetName() },
      "duration": faker.random.number()

    });
  }

  return locations;
}
