const collection = require('../config/collection');
const db = require('../config/connection');
const { ObjectId } = require('mongodb');
module.exports = {
  AddEmployee: (details) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.EMPLOYEE_COLLECTION)
        .insertOne(details)
        .then(() => resolve())
        .catch((err) => reject(err));
    });
  },
  getAllEmploye: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const EmployeDetails = await db
          .get()
          .collection(collection.EMPLOYEE_COLLECTION)
          .aggregate([{ $project: { name: 1, jobtitle: 1, email: 1 } }])
          .toArray();
        resolve(EmployeDetails);
      } catch (error) {
        reject(error);
      }
    });
  },
  getAllEmployeById: (Id) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.EMPLOYEE_COLLECTION)
        .findOne({ _id: ObjectId(Id) })
        .then((EmployeDetails) => resolve(EmployeDetails))
        .catch((err) => reject(err));
    });
  },
};
