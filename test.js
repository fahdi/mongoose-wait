const MongoClient = require('mongodb').MongoClient;
const debug = require('debug')('mongoose-wait:test');

MongoClient.connect('mongodb://localhost:27017/test', {
  // retry to connect for 60 times
  reconnectTries: 60,
  // wait 1 second before retrying
  reconnectInterval: 1000
},

(err, db) => {
  const col = db.collection('t');

  setInterval(() => {
    col.insert({
      a: 1
    }, (err1, r) => {
      debug('insert');
      debug(err1, r);

      col.findOne({}, (err2, doc) => {
        debug('findOne');
        debug(err2, doc);
      });
    });
  }, 1000);
});
