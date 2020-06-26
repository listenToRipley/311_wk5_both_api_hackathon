const mysql = require('mysql')
const pool = require('../mysql/connections')
const { handleSQLError } = require('../mysql/error')

//gets
const getEmployees = (req, res) => { 
  //select no more than 50 from the employees list 
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows)
  })
}

const getEmployeesById = (req, res) => {   
//return individual who employee numbers match the number id provided 
let sql = "SELECT * FROM employees WHERE emp_no = ?"
sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, rows) => {
  if(err) return handleSQLError(res, err)
  return res.json(rows)
})
}

const getEmployeesByFirstName = (req, res) => { 
//return the individuals whose first name matches that of the provided  
let sql = "SELECT * FROM employees WHERE first_name = ?"
sql = mysql.format(sql, [req.params.first_name])

  pool.query(sql, (err, rows) => {
  if(err) return handleSQLError(res, err)
  return res.json(rows)
})}

module.exports = { 
  getEmployees, 
  getEmployeesById, 
  getEmployeesByFirstName
}