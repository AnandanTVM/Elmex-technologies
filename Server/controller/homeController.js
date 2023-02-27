const homeUtil = require('../util/homeUtil');

const AddEmployeeContro = (req, res) => {
  console.log(homeUtil.AddEmployee);
  homeUtil
    .AddEmployee(req.body)
    .then((r) => res.json({ status: true, Message: 'Upload Success' }))
    .catch((err) => {
      res.json({ status: false, Message: 'something went wrong', stack: err });
    });
};
module.exports = { AddEmployeeContro };
