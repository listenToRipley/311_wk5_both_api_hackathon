const express = require("express");
const router = express.Router();
const salariesController = require("../controllers/salaries");

//GETS
router.get("/salaries", salariesController.getCurrentSalaries);

router.get("/salary/:emp_no", salariesController.getSalaryByEmpNo);

router.get("/salary/:first_name", salariesController.getSalaryByFirstName);


modules.export = router;
