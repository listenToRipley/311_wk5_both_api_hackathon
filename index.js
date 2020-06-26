  
const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const employeesRouter = require('./routes/employees')
const salariesRouter = require('./routes/salaries')

const bodyParser = require("body-parser");
const e = require("express");

app.use(bodyParser.json())
app.use('/employees', employeesRouter)
app.use('/salaries', salariesRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our API!')
})

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });
 