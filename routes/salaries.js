const express = require("express");
const router = express.Router();
const salariesController = require("../controllers/salaries");

//GETS
router.get("/employees", salariesController.getCurrentSalaries);

router.get("/:id", salariesController.getSalaryByEmpNo);

router.get("/firstname/:first_name", salariesController.getSalaryByFirstName);


module.exports = router;
