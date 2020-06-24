const express = require('express')
const router = expres.Router()
const controller = require('../controllers/employees')

//gets
router.get('/', controller.getEmployees)

router.get('/:id', controller.getEmployeesById)

router.get('/firstname/:first_name', controller.getEmployeesByFirstName)


module.exports = router