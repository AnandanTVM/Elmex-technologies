const homeUtil = require('../util/homeUtil');

const AddEmployeeContro = (req, res) =>
  homeUtil
    .AddEmployee(req.body)
    .then((r) => res.json({ status: true, Message: 'Upload Success' }))
    .catch((err) => {
      res.status(409).json({ status: false, Message: err.Message });
    });

const getAllEmployecontro = (req, res) =>
  homeUtil
    .getAllEmploye()
    .then((Employedetails) =>
      res.json({ status: true, response: Employedetails })
    )
    .catch((err) =>
      res.json({ status: false, Message: 'something went wrong', stack: err })
    );

const getAllEmployeByIdcontro = (req, res) =>
  homeUtil
    .getAllEmployeById(req.params.Id)
    .then((Employedetails) =>
      res.json({ status: true, response: Employedetails })
    )
    .catch((err) =>
      res.json({ status: false, Message: 'something went wrong', stack: err })
    );
module.exports = {
  AddEmployeeContro,
  getAllEmployecontro,
  getAllEmployeByIdcontro,
};
