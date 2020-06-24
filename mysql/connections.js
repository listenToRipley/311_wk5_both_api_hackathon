const mysql = require('mysql')

class Connection {
  construction() {
    if(!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host:'104.197.199.160',
        user:'root',
        password:'8ufDfd1qDysPmPz5',
        database: 'employees'
      })

      return this.pool
    }
    return this.pool
  }
}
const instance = new Connection()

module.export = instance