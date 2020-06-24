const mysql = require('mysql')
const pool = require('../mysql/connections')

const getEmployees = (req, res) => { res.send('getting employees...')}

const getEmployeesById = (req, res) => { res.send('getting employees...')}

const getEmployeesByFirstName = (req, res) => { res.send('getting employees...')}


pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.json({ message: `Deleted` });
})

module.exports = { 
  getEmployees, 
  getEmployeesById, 
  getEmployeesByFirstName
}