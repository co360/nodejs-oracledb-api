const oracledb = require('oracledb');

class Database {    

    constructor() {
        this.user = process.env.NODE_ORACLEDB_USER,
        this.password = process.env.NODE_ORACLEDB_PASSWORD,
        this.connectString = process.env.NODE_ORACLEDB_CONNECTIONSTRING
        this.externalAuth = false
    }

    getConnection() {
        return oracledb.getConnection({            
                user: this.user,
                password: this.password,
                connectString: this.connectString,
                externalAuth: this.externalAuth             
        })
    }

    async query(sql, params = []) {        
            const conn = await this.getConnection();
            const result = await conn.execute(sql, params);
            return result;       
        
    }
}

module.exports = Database;