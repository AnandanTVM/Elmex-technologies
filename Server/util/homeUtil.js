const collection = require('../config/collection');
const db = require('../config/connection');
module.exports = {
  AddEmployee: (details) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.EMPLOYEE_COLLECTION)
        .insertOne(details)
        .then(() => {
          console.log('Done');
          resolve();
        })
        .catch((err) => reject(err));
    });
  },
};
