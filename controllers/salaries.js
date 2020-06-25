const mysql = require("mysql");
const pool = require("../mysql/connections");
const { error500, error404 } = require("../mysql/error");

//3 GETS

const getCurrentSalaries = (req, res) => {
  let sql = 'select * from salaries where to_date = 9999%'
  
  
  // res.send("getting salaries...");
};

const getSalaryByEmpNo = (req, res) => {
  let 

  res.send("getting salaries...");
};

const getSalaryByFirstName = (req, res) => {
  res.send("getting salaries...");
};

//3 UPDATES

const updateCurrentSalaries = (req, res) => {
  res.send("updating salaries...");
};

const updateSalariesByEmpNo = (req, res) => {
  res.send("updating salaries...");
};

const updateSalariesByFirstName = (req, res) => {
  res.send("updating salaries...");
};

// EXPORT

module.exports = {
  //salaries functions
  getSalaries,
  getSalaryByEmpNo,
  getSalaryByFirstName,
  updateSalaries,
  updateSalariesByEmpNo,
  updateSalariesByFirstName,
};
