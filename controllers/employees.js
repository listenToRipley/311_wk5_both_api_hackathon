const mysql = require('mysql')
const pool = require('../mysql/connections')
const { error500, error404 } = require('../mysql/error')

//gets
const getEmployees = (req, res) => { 
  //select all the employees 
  pool.query("SELECT * FROM employees", (err, row) => {
    if(err) return error404(res, err)
    if(err) return error500(res, err)
    return res.json(rows)
  })
}

const getEmployeesById = (req, res) => { res.send('getting employees...')}

const getEmployeesByFirstName = (req, res) => { res.send('getting employees...')}

//puts 

//error handling

// pool.query(mysql, (err, results) => {
//   if (err) return error500(res, err)
//   if (err) return error404(res, err)
//   return res.json({ err});
// })

module.exports = { 
  getEmployees, 
  getEmployeesById, 
  getEmployeesByFirstName
}