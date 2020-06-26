const mysql = require("mysql");
const pool = require("../mysql/connections");
const { error500, error404 } = require("../mysql/error");

//3 GETS

const getCurrentSalaries = (req, res) => {
  // find all CURRENT salaries
 
  



  
  // res.send("getting salaries...");
};

const getSalaryByEmpNo = (req, res) => {




  // res.send("getting salaries...");
};

const getSalaryByFirstName = (req, res) => {



  // res.send("getting salaries...");
};



// EXPORT

module.exports = {
  //salaries functions
  getSalaries,
  getSalaryByEmpNo,
  getSalaryByFirstName,
};
