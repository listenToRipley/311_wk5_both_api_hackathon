const mysql = require('mysql')

class Connection {
  constructor() {
    if(!this.pool) {
      console.log('creating connection...')
       this.pool = mysql.createPool({
        connectionLimit: 100,
        host:'104.197.199.160',
        user:'root',
        password:'xxxxxxxxxx',
        database: 'employees'
      })

      return this.pool
    }
    return this.pool
  }
}
const instance = new Connection()

module.exports = instance