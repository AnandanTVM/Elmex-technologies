const express = require("express");
const homeControllers = require("../controller/homeController");
const router = express.Router();
router.post("/add", homeControllers.AddEmployeeContro);
router.get("/getAllEmploye", homeControllers.getAllEmployecontro);
router.get("/getEmploye/:Id", homeControllers.getAllEmployeByIdcontro);
module.exports = router;
