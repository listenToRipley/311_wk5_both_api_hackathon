const express = require("express");
const router = express.Router();
const salariesController = require("../controllers/salaries");

//GETS
router.get("/salaries", salariesController.getCurrentSalaries);

router.get("/salary/:emp_no", salariesController.getSalaryByEmpNo);

router.get("/salary/:first_name", salariesController.getSalaryByFirstName);

//UPDATES
router.put("/salaries", salariesController.updateCurrentSalaries);

router.put("/salary/:emp_no", salariesController.updateSalariesByEmpNo);

router.put("/salary/:first_name", salariesController.updateSalariesByFirstName);

modules.export = router;
