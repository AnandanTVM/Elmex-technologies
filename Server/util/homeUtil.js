const collection = require('../config/collection');
const db = require('../config/connection');
const { ObjectId } = require('mongodb');
module.exports = {
  AddEmployee: (details) => {
    return new Promise(async (resolve, reject) => {
      const result = await db
        .get()
        .collection(collection.EMPLOYEE_COLLECTION)
        .find({
          $or: [{ email: details.email }, { phone: details.phone }],
        })
        .toArray();
      if (result.length === 0) {
        db.get()
          .collection(collection.EMPLOYEE_COLLECTION)
          .insertOne(details)
          .then(() => resolve())
          .catch((err) => reject(err));
      } else {
        reject({ Message: 'Employee Duplication' });
      }
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
