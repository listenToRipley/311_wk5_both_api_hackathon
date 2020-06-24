const mysql = require('mysql')

class Connection {
  construction() {
    if(!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host:'',
        user:'',
        password:'',
        database: ''
      })

      return this.pool
    }
    return this.pool
  }
}
const instance = new Connection()

module.export = instance