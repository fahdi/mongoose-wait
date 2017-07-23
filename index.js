const waitForMongoose = require('wait-for-mongoose');
const debug = require('debug')('mongoose-wait:index');

waitForMongoose('mongodb://localhost/abds', {
  timeout: 1000 * 60 * 5, // 5 minutes until timeout happens
  interval: 1000 * 5 // 1 second between each request
}, (err) => {
  if (err) {
    debug('Timeout connecting to MongoDB server!');
    process.exit(1);
  }
  debug('worked!');
  // Here you would create your connection
});
