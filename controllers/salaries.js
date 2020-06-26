const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");

// GETS

const getCurrentSalaries = (req, res) => {
  // find all CURRENT salaries

  let sql =
    "select employees.emp_no, employees.first_name, employees.last_name, salaries.salary from employees join salaries where employees.emp_no = salaries.emp_no and to_date = (select max(to_date) from salaries) limit 50";
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getSalaryByEmpNo = (req, res) => {
  let sql =
    "select employees.emp_no, employees.first_name, employees.last_name, salaries.salary from employees join salaries where employees.emp_no = salaries.emp_no and to_date = (select max(to_date) from salaries) and employees.emp_no = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getSalaryByFirstName = (req, res) => {
  let sql =
    "select employees.emp_no, employees.first_name, employees.last_name, salaries.salary from employees join salaries where employees.emp_no = salaries.emp_no and to_date = (select max(to_date) from salaries) and employees.first_name = ? limit 50";
  sql = mysql.format(sql, [req.params.first_name]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

// EXPORT

module.exports = {
  //salaries functions
  getCurrentSalaries,
  getSalaryByEmpNo,
  getSalaryByFirstName,
};
