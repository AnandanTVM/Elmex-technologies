const collection = require("../config/collection");
const db = require("../config/connection");
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
  getAllEmploye:  () => {
  return new Promise(async(resolve, reject) => {
    try {
      const EmployeDetails = await db
      .get()
      .collection(collection.EMPLOYEE_COLLECTION)
      .find()
      .toArray();
      resolve(EmployeDetails);
     } catch (error) {
      reject(error)
     }
   })
  },
};
