const mysql = require('mysql')
const pool = require('../mysql/connections')
const { error500, error404 } = require('../mysql/error')

const getEmployees = (req, res) => { res.send('getting employees...')}

const getEmployeesById = (req, res) => { res.send('getting employees...')}

const getEmployeesByFirstName = (req, res) => { res.send('getting employees...')}


pool.query(sql, (err, results) => {
  if (err) return error500(res, err)
  if (err) return error404(res, err)
  return res.json({ err});
})

module.exports = { 
  getEmployees, 
  getEmployeesById, 
  getEmployeesByFirstName
}