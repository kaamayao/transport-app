const jsonServer = require('json-server');
const getLocations = require('./locations.js');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = 3030;

server.use(middlewares);

server.get('/locations', (req, res) => {
  res.status(200).jsonp(getLocations());
});

server.listen(port);
