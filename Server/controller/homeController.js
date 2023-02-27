const homeUtil = require("../util/homeUtil");

const AddEmployeeContro = (req, res) => {
  homeUtil
    .AddEmployee(req.body)
    .then((r) => res.json({ status: true, Message: "Upload Success" }))
    .catch((err) => {
      res.json({ status: false, Message: "something went wrong", stack: err });
    });
};

const getAllEmployecontro = (req, res) => {
  homeUtil
    .getAllEmploye()
    .then((Employedetails) =>
      res.json({ status: true, response: Employedetails })
    )
    .catch((err) =>
      res.json({ status: false, Message: "something went wrong", stack: err })
    );
};
module.exports = { AddEmployeeContro, getAllEmployecontro };
