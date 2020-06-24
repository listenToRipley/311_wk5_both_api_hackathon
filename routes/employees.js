const express = require('express')
const router = expres.Router()
//const employeesController = require('../controllers/employees')

//gets
router.get('/', (req, res) => { res.send('getting employees...')})

router.get('/:id', (req, res) => { res.send('getting employees...')})
)

router.get('/firstname/:first_name', (req, res) => { res.send('getting employees...')})
)


module.exports = router