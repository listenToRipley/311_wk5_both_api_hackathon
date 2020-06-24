const express = require('express')
const router = express.Router()
const controller = require('../controllers/employees')

//gets
router.get('/', controller.getEmployees)

router.get('/:id', controller.getEmployeesById)

router.get('/firstname/:first_name', controller.getEmployeesByFirstName)

//puts
router.put('/', controller.getEmployees)

router.put('/:id', controller.getEmployeesById)

router.put('/firstname/:first_name', controller.getEmployeesByFirstName)

module.exports = router